module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: "Danica's note",
  description: '浩瀚互联网中的小小自留地',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    repo: 'https://github.com/danicachen#/',
    logo: 'https://vuejs.org/images/logo.png',
    displayAllHeaders: true,
    sidebar: [
      {
        text: '时间账单',
        link: '/logs/time/',
        children: [
          {
            text: '2022',
            collapsible: true,
            children:[
              {
              text: '1月',
              link:'/logs/time/2022/1/week4',
              },
            ],
          }
        ],
      },
      {
        text: 'Vue',
       
        children: [
          {
            text: '学习笔记',
            link: '/front-end/vue/note/',
            
          },
          {
            text: '项目',
            link: '/front-end/vue/project/',
          }
        ],
      },
      {
        text: 'Pyhton',
        link: '/python/',
      },
      // 字符串 - 页面文件路径
      {
        text: '算法',
        link: '/algorithm/',
      },
    ],
    navbar: [
      // NavbarGroup
      {
        text: '前端笔记',
        children: ['/front-end/vue/', '/group/bar.md'],
      },
      // NavbarItem
      {
        text: '算法',
        link: '/algorithm/',
      },
      {
        text: '精神粮食',
        link: '/favorite/',
      },
      // NavbarItem
      {
        text: 'B站',
        link: 'https://space.bilibili.com/178326385',
      },
    ],
  },
}