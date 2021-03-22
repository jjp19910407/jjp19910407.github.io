module.exports = {
  title: 'WilliamJ\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  sidebarDepth: 2,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '学习文档', link: '/guide/' },
      { text: 'github', link: 'https://github.com/jjp19910407' },
    ],
    sidebar: {
      '/guide/': [{
        title: 'The Feathers guide',
        collapsable: false,
        children: [
          'ts/one.md',
          'ts/two.md'
        ]
      }]
    }
  }
};