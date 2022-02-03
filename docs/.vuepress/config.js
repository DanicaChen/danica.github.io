module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: "Danica's note",
  description: 'We should consider every day lost on which we have not danced at least once.',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    repo: 'https://github.com/danicachen#/',
    logo: 'https://vuejs.org/images/logo.png',
    displayAllHeaders: true,
    sidebar: [
      // {
      //   text: '时间账单',
      //   link: '/logs/time/',
      //   children: [
      //     {
      //       text: '2022',
      //       collapsible: true,
      //       children:[
      //         {
      //         text: '1月',
      //         link:'/logs/time/2022/1/week4',
      //         },
      //       ],
      //     }
      //   ],
      // },
      {
        text: 'Vue',
       
        children: [
          {
            text: '笔记',
            link: '/front-end/vue/note/',
            
          }
        ],
      },
      {
        text: 'Pyhton',
        link: '/back-end/python/',
      },
      {
        text: '部署相关',
        link: '/back-end/deploy/',
      },
    ],
    navbar: [
      // NavbarGroup
      {
        text: '前端笔记',
        children: ['/front-end/vue/note'],
      },
      {
        text: '后端笔记',
        children: ['/back-end/deploy/', '/back-end/python/'],
      },
      // NavbarItem
      {
        text: '算法',
        link: '/algorithm/',
      },
      
      // NavbarItem
      // {
      //   text: 'B站',
      //   link: 'https://space.bilibili.com/178326385',
      // },
    ],
  },
}