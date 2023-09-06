module.exports = {
    // title: 'Hello VuePress',
    // description: 'Just playing around',
    themeConfig: {
        search: false,
        navbar: false,
        // nav: [
        //     { text: 'Home', link: '/' },
        //     { text: 'Guide', link: '/guide/' },
        //     { text: 'External', link: 'https://google.com' },
        // ],
        // sidebar: [
        //     '/',
        //     '/大纲',
        //     '/简历与自我介绍',
        //     '/基础知识',
        //     '/项目',
        //     '/面试实战',
        //     '/经验总结',
        // ]
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
                // initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '简历与自我介绍',
                path: '/简历与自我介绍',
                children: [],
                collapsable: false,
                // initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '基础知识',
                path: '/基础知识',
                children: ['/base/JS', '/base/CSS'],
                collapsable: true,
                // initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '项目',
                path: '/项目',
                children: [],
                collapsable: false,
                // initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '面试实战',
                path: '/面试实战',
                children: [],
                collapsable: false,
                // initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '经验总结',
                path: '/经验总结',
                children: [],
                collapsable: false,
                // initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ]
    }
}
