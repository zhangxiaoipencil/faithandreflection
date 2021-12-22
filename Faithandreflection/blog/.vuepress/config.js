module.exports = {
    title: '信仰与思考', // Title for the site. This will be displayed in the navbar.
    theme: '@vuepress/theme-blog',
    // base: "/BertKingBlog/",
    themeConfig: {
        sidebar: 'auto',
        backToHome: "返回首页",
        about: {
            fullName: 'Zhangxiaoipencil',
            bio: 'love Lord ♥ ...',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdfbA8RdCOXcMSpyvAmEjVpnm8t5uZ8aXmA&usqp=CAU',
        },
        directories: [{
                id: "posts",
                dirname: "_posts",
                title: "全部博客",
                path: "/",
                itemPermalink: "/:year/:month/:day/:slug"
            },
            {
                id: "items",
                dirname: "_faith",
                title: "信仰",
                path: "/faith/",
                itemPermalink: "/:year/:month/:day/:slug"
            },
            {
                id: "new",
                dirname: "_new",
                title: "New Testament",
                path: "/new/",
                itemPermalink: "/:year/:month/:day/:slug"
            },
            {
                id: "old",
                dirname: "_old",
                title: "Old Testament",
                path: "/old/",
                itemPermalink: "/:year/:month/:day/:slug"
            },
        ],
        nav: [{
                text: '全部',
                link: '/'
            },
            {
                text: '新约',
                link: '/new/'
            },
            {
                text: '旧约',
                link: '/old/'
            },
            {
                text: '信仰',
                link: '/faith/'
            },
            {
                text: '分类',
                link: '/tag/'
            },
            {
                text: "Github",
                link: "https://github.com/zhangxiaoipencil"
            }
        ],
        lastUpdated: 'Last Updated',
        dateFormat: 'YYYY-MM-DD',
        footer: {
            smoothScroll: true,
            contact: [{
                    type: 'github',
                    link: 'https://github.com/zhangxiaoipencil',
                },
                {
                    type: 'twitter',
                    link: 'https://google.com',
                },
            ],
            copyright: [{
                    text: 'Privacy Policy',
                    link: 'https://policies.google.com/privacy?hl=en-US',
                },
                {
                    text: 'MIT Licensed | Copyright © 2018-present Vue.js',
                    link: '',
                },
            ],
        },
    },
    plugins: [
        ['md-enhance', {
            aligh: true,
            mark: true,
            tex: true,
        }, ],
        'photo-swipe',
        '@vuepress/last-updated',
        'reading-progress',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress', // 加载进度条
        '@vuepress/back-to-top', ['@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true,
            },
        ],
    ],
}