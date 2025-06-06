import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: '我的博客',
    description: '由 VitePress 驱动的技术博客',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/posts/hello' },
            { text: 'GitHub', link: 'https://github.com/qingzhanxue' },
        ],
        sidebar: {
            '/posts/': [
                {
                    text: '博客文章',
                    items: [
                        { text: 'Hello World', link: '/posts/hello' },
                        // 你可以继续添加文章
                    ]
                },
                {
                    text: '前端',
                    items: [
                        { text: 'Vue 性能优化', link: '/posts/frontend/vue-optimization' }
                    ]
                },
                {
                    text: '后端',
                    items: [
                        { text: 'Spring Boot 多线程实战', link: '/posts/backend/springboot-threads' }
                    ]
                },
                {
                    text: '其它',
                    items: [
                        { text: 'AI 一些想法', link: '/posts/other/ai-thoughts' }
                    ]
                }
            ]
        }
    }
})
