# syntax=docker/dockerfile:1

FROM node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@10.34.7 --activate
WORKDIR /app

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Development image with hot reloading
FROM deps AS dev
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
COPY . .
RUN chmod a+rx /app && \
    chmod -R a+rX /app/app /app/components /app/content /app/styles && \
    chmod a+r /app/package.json /app/pnpm-lock.yaml /app/next.config.mjs /app/mdx-components.tsx /app/tsconfig.json
EXPOSE 3000
CMD ["./node_modules/.bin/next", "dev", "--webpack"]

# Build the application for production
FROM deps AS builder
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY . .
RUN mkdir -p /app/public && pnpm build

# Production runner image
FROM builder AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chmod a+rx /app && \
    chmod -R a+rX /app/app /app/components /app/content /app/public /app/styles /app/.next && \
    chmod a+r /app/package.json /app/pnpm-lock.yaml /app/next.config.mjs /app/mdx-components.tsx /app/tsconfig.json && \
    chown -R nextjs:nodejs /app/.next

USER nextjs
EXPOSE 3000
CMD ["./node_modules/.bin/next", "start"]
