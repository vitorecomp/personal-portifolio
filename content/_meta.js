export default {
  '---workspace': {
    type: 'separator',
    title: '# WORKSPACE',
  },
  index: {
    title: './portfolio',
    theme: {
      toc: true,
      breadcrumb: false,
      copyPage: false,
    },
  },
  repositories: {
    title: './all_repos',
    theme: {
      toc: true,
      copyPage: false,
    },
  },
  about: {
    title: './about',
    theme: {
      toc: true,
      copyPage: false,
    },
  },
  '---directories': {
    type: 'separator',
    title: '# DIRECTORIES',
  },
  systems: '~/systems-and-cli',
  ai: '~/ai-and-agents',
  hardware: '~/backyard-mech',
  'cloud-devtools': '~/cloud-and-devtools',
  vitorx86: {
    title: './vitorx86.dev',
    type: 'page',
    href: 'https://vitorx86.dev',
  },
  blog: {
    title: './blog',
    type: 'page',
    href: 'https://blog.vitorx86.dev',
  },
  linkedin: {
    title: './linkedin',
    type: 'page',
    href: 'https://www.linkedin.com/in/vieiravitor',
  },
}
