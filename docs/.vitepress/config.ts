import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja',
  title: 'Coding Guidelines',
  description: 'コーディング規約とベストプラクティス集',
  
  // 検索エンジンに載らないようにする
  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }]
  ],
  
  // GitHub Pages (Project Pages)
  base: '/wan55-coding-guideline/',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Web制作ルール', link: '/rules/common' },
      { text: 'チェックリスト', link: '/rules/checklist' }
    ],
    
    sidebar: {
      '/rules/': [
        {
          text: 'Web制作ルール',
          items: [
            { text: '共通ルール', link: '/rules/common' },
            { text: 'ディレクトリ・ファイルルール', link: '/rules/directory-file' },
            { text: 'HTML制作ルール', link: '/rules/html' },
            { text: 'CSS制作ルール', link: '/rules/css' },
            { text: 'JavaScript制作ルール', link: '/rules/javascript' },
            { text: '画像制作ルール', link: '/rules/images' },
          ]
        }
      ],
      '/recipes/': [
        {
          text: 'Recipes',
          items: [
            { text: 'パターン集', link: '/recipes/patterns' }
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
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 WAN55'
    },
    
    search: {
      provider: 'local'
    },
    
    outline: {
      level: [2, 3],
      label: '目次'
    },
    
    docFooter: {
      prev: '前のページ',
      next: '次のページ'
    },
    
    lastUpdated: {
      text: '最終更新'
    }
  },
  
  markdown: {
    lineNumbers: true
  }
})
