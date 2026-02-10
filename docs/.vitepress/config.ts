import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja',
  title: 'Coding Guidelines',
  description: 'コーディング規約とベストプラクティス集',

  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }]
  ],

  base: '/wan55-coding-guideline/',

  themeConfig: {
    nav: [
      { text: '制作ルール', link: '/rules/common' },
      { text: 'チェックリスト', link: '/rules/checklist' }
    ],

    sidebar: {
      '/rules/': [
        {
          text: '制作ルール',
          items: [
            { text: '共通ルール', link: '/rules/common' },
            { text: 'ディレクトリ・ファイルルール', link: '/rules/directory-file' },
            { text: 'HTML制作ルール', link: '/rules/html' },
            { text: 'CSS制作ルール', link: '/rules/css' },
            { text: 'JavaScript制作ルール', link: '/rules/javascript' },
            { text: '画像制作ルール', link: '/rules/images' },
            { text: 'コーディング後チェック', link: '/rules/checklist' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wan55-engineers/wan55-coding-guideline' }
    ],

    editLink: {
      pattern: 'https://github.com/wan55-engineers/wan55-coding-guideline/edit/main/docs/:path',
      text: 'このページを編集'
    },

    footer: {
      message: 'See LICENSE for terms.',
      copyright: 'Copyright © 2026 Wan55, Inc.'
    },

    search: { provider: 'local' },

    outline: { level: [2, 3], label: '目次' },

    docFooter: { prev: '前のページ', next: '次のページ' },

    lastUpdated: { text: '最終更新' }
  },

  markdown: {
    lineNumbers: true
  }
})
