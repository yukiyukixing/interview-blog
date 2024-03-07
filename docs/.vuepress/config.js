module.exports = {
    base: '/interview-blog/',
    plugins: ['@vuepress/back-to-top'],
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        [
            "script",
            {},
            `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ld1lb1mxcw");
            `
        ]
    ],
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
                    '/base/React',
                    '/base/前端工程化',
                    '/base/浏览器',
                    '/base/CSS',
                    '/base/计算机原理',
                    '/base/微前端',
                    '/base/2D',
                    '/base/3D',
                    '/base/算法',
                    '/base/场景题',
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
                title: '面经',
                path: '/面经',
                children: [],
                collapsable: false,
            },
            {
                title: '面试复盘',
                path: '/面试复盘',
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
    },
    dest: 'dist',
}
