module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@images': '../assets/images'
            }
        }
    },
    themeConfig: {
        search: false,
        navbar: false,
        sidebar: [
            {
                title: '前言',   // 必要的
                path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: []
            },
            {
                title: '大纲',
                path: '/大纲',
                children: [],
                collapsable: false,
            },
            {
                title: '简历与自我介绍',
                path: '/简历与自我介绍',
                children: [],
                collapsable: false,
            },
            {
                title: '基础知识',
                path: '/基础知识',
                children: [
                    '/base/JS',
                    '/base/CSS',
                    '/base/浏览器',
                    '/base/React',
                    '/base/前端工程化',
                    '/base/计算机原理',
                    '/base/可视化',
                    '/base/微前端',
                    '/base/算法',
                    '/base/Vue',
                    '/base/安全',
                ],
                collapsable: true,
            },
            {
                title: '项目',
                path: '/项目',
                children: [],
                collapsable: false,
            },
            {
                title: '面试实战',
                path: '/面试实战',
                children: [],
                collapsable: false,
            },
            {
                title: '经验总结',
                path: '/经验总结',
                children: [],
                collapsable: false,
            }
        ]
    }
}
