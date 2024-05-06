import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
  '/': [
    '',
    {
      children: 'structure',
      collapsible: true,
      icon: 'fluent:document-bullet-list-24-filled',
      prefix: 'kotlin/',
      text: '1. Kotlin 笔记',
    },
  ],
})
