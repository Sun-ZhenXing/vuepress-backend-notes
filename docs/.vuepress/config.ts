import { defineUserConfig, defaultTheme } from 'vuepress'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import { autoCatalogPlugin } from 'vuepress-plugin-auto-catalog'

const USER_NAME = 'Sun-ZhenXing'
const BASE_PATH = '/vuepress-backend-notes/'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '后端笔记',
  description: '后端笔记笔记',
  head: [
    ['link', { rel: 'icon', href: `${BASE_PATH}favicon.svg` }]
  ],
  base: BASE_PATH,
  markdown: {
    code: {
      lineNumbers: 10
    }
  },
  theme: defaultTheme({
    logo: '/favicon.svg',
    repo: `${USER_NAME}${BASE_PATH}`,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    navbar: [
    ],
    sidebar: 'auto',
  }),
  plugins: [
    mdEnhancePlugin({
      gfm: true,
      container: true,
      linkCheck: true,
      vPre: true,
      tabs: true,
      codetabs: true,
      align: true,
      attrs: true,
      sub: true,
      sup: true,
      footnote: true,
      mark: true,
      imgLazyload: true,
      tasklist: true,
      katex: true,
      mermaid: true,
      delay: 200,
      stylize: [
        {
          matcher: '@def',
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'tip' },
              content: '定义'
            }
          }
        },
        {
          matcher: /@note/,
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'span',
              attrs: { style: 'color: var(--c-warning)' },
              content: '说明：'
            }
          }
        },
        {
          matcher: /@positive/,
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'span',
              attrs: { style: 'color: var(--c-tip)' },
              content: '正例：'
            }
          }
        },
        {
          matcher: /@negative/,
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'span',
              attrs: { style: 'color: var(--c-danger)' },
              content: '反例：'
            }
          }
        },
        {
          matcher: /@TODO/,
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'danger' },
              content: 'TODO'
            }
          }
        },
        {
          matcher: /@force/,
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'span',
              attrs: { style: 'color: var(--c-danger)' },
              content: '【强制】'
            }
          }
        },
        {
          matcher: /@recommend/,
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'span',
              attrs: { style: 'color: var(--c-warning)' },
              content: '【推荐】'
            }
          }
        },
        {
          matcher: /@ref/,
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'span',
              attrs: { style: 'color: var(--c-tip)' },
              content: '【参考】'
            }
          }
        }
      ]
    }, false),
    searchProPlugin({}),
    autoCatalogPlugin({
      orderGetter: ({ title, routeMeta }) => {
        if (routeMeta.order) return routeMeta.order as number
        const prefix = title.match(/^\d+. /)
        if (prefix) return parseInt(prefix[0])
        const suffix = title.match(/\d+$/)
        if (suffix) return parseInt(suffix[0])
        return 0
      }
    }),
    copyCodePlugin({
      showInMobile: true
    })
  ]
})
