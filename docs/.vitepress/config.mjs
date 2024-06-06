import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Adstat API",
  description: "Добро пожаловать в Adstat Docs",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    outline: {
      level: "deep",
      label: "На этой странице",
    },

    sidebar: [
      {
        text: 'Начало работы',
        items: [
          { text: 'Параметры подключения', link: '/get-started/get-started' },
        ]
      },
      {
        text: 'Методы API',
        items: [
          { text: 'Авторизация', link: 'api-methods/authorization' },
          { text: 'Балансы', link: 'api-methods/balances' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://adstat.pro' }
    ],
  }
})
