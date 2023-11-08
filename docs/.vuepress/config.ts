import process from 'node:process'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { getDirname, path } from '@vuepress/utils'
import { slug as slugify } from 'github-slugger'
import { defaultTheme, defineUserConfig } from 'vuepress'
import { autoCatalogPlugin } from 'vuepress-plugin-auto-catalog'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { searchProPlugin } from 'vuepress-plugin-search-pro'

const __dirname = getDirname(import.meta.url)
const isProd = process.env.NODE_ENV === 'production'
const ROOT_PATH = path.resolve(__dirname, '../..')
const CURRENT_PATH = path.resolve(__dirname, '.')
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
      lineNumbers: 10,
    },
    importCode: {
      handleImportPath: str => str
        .replace(/^\//, ROOT_PATH.replace(/(?:|\\|\/)$/, '/'))
        .replace(/^@\//, CURRENT_PATH.replace(/(?:|\\|\/)$/, '/')),
    },
    anchor: {
      level: [1, 2, 3, 4, 5, 6],
      slugify,
    },
  },
  theme: defaultTheme({
    logo: '/favicon.svg',
    repo: `${USER_NAME}${BASE_PATH}`,
    docsDir: 'docs',
    selectLanguageName: '简体中文',
    selectLanguageText: '选择语言',
    selectLanguageAriaLabel: '选择语言',
    editLinkText: '在 GitHub 上编辑此页',
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    navbar: [
    ],
    sidebar: 'auto',
    themePlugins: {
      git: isProd,
    },
  }),
  plugins: [
    mdEnhancePlugin({
      gfm: true,
      container: true,
      vPre: true,
      tabs: true,
      card: true,
      codetabs: true,
      include: {
        resolvePath: file => {
          if (file.startsWith('@/'))
            return file.replace(/^@\//, CURRENT_PATH)
          if (file.startsWith('/'))
            return file.replace(/^\//, ROOT_PATH.replace(/(?:|\\|\/)$/, '/'))
          return file
        },
      },
      align: true,
      attrs: true,
      sub: true,
      sup: true,
      footnote: true,
      mark: true,
      imgLazyload: true,
      tasklist: true,
      katex: {
        copy: true,
      },
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
        if (routeMeta.order)
          return routeMeta.order as number
        const prefix = title.match(/^\d+. /)
        if (prefix)
          return Number.parseInt(prefix[0])
        const suffix = title.match(/\d+$/)
        if (suffix)
          return Number.parseInt(suffix[0])
        return 0
      },
    }),
    copyCodePlugin({
      showInMobile: true,
    }),
    shikiPlugin({ theme: 'dark-plus' }),
  ],
  alias: {
    '@': CURRENT_PATH,
  },
})
