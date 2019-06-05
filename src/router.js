import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const menuRouter = [
    {
        path: '/home',
        name: 'home',
        meta: {
            title: '首页',
        },
        component: () => import('./views/home/home.vue'),
    },
    {
        path: '/cases',
        name: 'cases',
        meta: {
            title: '案列库',
        },
        component: () => import('./views/cases/cases.vue'),
        redirect: '/cases/index',
        children: [
            {
                path: 'index',
                name: 'caseIndex',
                meta: {
                    title: '案列库',
                },
                component: () =>
                    import('./views/cases/children/index/index.vue'),
            },
            {
                path: 'detail/:id',
                name: 'caseDetal',
                meta: {
                    title: '案列库详情',
                },
                component: () =>
                    import('./views/cases/children/detail/detail.vue'),
            },
            {
                path: 'trace/:id',
                name: 'caseTrace',
                meta: {
                    title: '案列库-项目回顾',
                },
                component: () =>
                    import('./views/cases/children/trace/trace.vue'),
            },
        ],
    },
    {
        path: '/originality',
        name: 'originality',
        meta: {
            title: '匠心记',
        },
        component: () => import('./views/originality/originality.vue'),
        children: [
            {
                path: 'detail/:id',
                name: 'jxjDetail',
                meta: {
                    title: '匠心记-详情',
                },
                component: () =>
                    import('./views/originality/children/detail/detail.vue'),
            },
            {
                path: 'postDetail/:id',
                name: 'jxjPostDetail',
                meta: {
                    title: '匠心记-帖子详情',
                },
                component: () =>
                    import('./views/originality/children/postDetail/postDetail.vue'),
                // import('./views/originality/children/postDetail/postDetail.vue'),
            },
            {
                path: 'imgDetail/:id',
                name: 'jxjImgDetail',
                meta: {
                    title: '匠心记-图文详情',
                },
                component: () =>
                    import('./views/originality/children/detail/detail.vue'),
            },
            {
                path: 'createQE/:id',
                name: 'createQE',
                metta: {
                    title: '匠心记-创建报告',
                },
                component: () =>
                    import('./views/originality/children/createQE/createQE.vue'),
            },
            {
                path: 'createDaliy/:id',
                name: 'createDaliy',
                metta: {
                    title: '匠心记-创建日报',
                },
                component: () =>
                    import('./views/originality/children/createDaliy/createDaliy.vue'),
            },
            {
                path: 'modifyProject/:id',
                name: 'modifyProject',
                metta: {
                    title: '匠心记-项目修改',
                },
                component: () =>
                    import('./views/originality/children/modifyProject/modifyProject.vue'),
            },
            {
                path: 'apply',
                name: 'jxjApply',
                metta: {
                    title: '匠心记-申请',
                },
                component: () =>
                    import('./views/originality/children/apply/apply.vue'),
            },
        ],
    },
    {
        path: '/enterprise',
        name: 'enterprise',
        meta: {
            title: '行业圈',
        },
        redirect: '/enterprise/index',
        component: () => import('./views/enterprise/enterprise.vue'),
        children: [
            {
                path: 'index',
                name: 'enterIndex',
                meta: {
                    title: '行业圈-首页',
                },
                component: () =>
                    import('./views/enterprise/children/index/index.vue'),
            },
            {
                path: 'detail/:id',
                name: 'enterDetail',
                meta: {
                    title: '行业圈-详情',
                },
                component: () =>
                    import('./views/enterprise/children/detail/detail.vue'),
            },
            {
                path: 'edit/:id',
                name: 'enterEdit',
                meta: {
                    title: '行业圈-编辑',
                },
                component: () =>
                    import('./views/enterprise/children/edit/edit.vue'),
            },
            {
                path: 'course/:id',
                name: 'enterCourse',
                meta: {
                    title: '行业圈-课程',
                },
                component: () =>
                    import('./views/enterprise/children/course/course.vue'),
            },
        ],
    },
    {
        path: '/news',
        name: 'news',
        meta: {
            title: '绿建要闻',
        },
        component: () => import('./views/news/news.vue'),
        redirect: '/news/index',
        children: [
            {
                path: 'index',
                name: 'newsIndex',
                meta: {
                    title: '绿建要闻-首页',
                },
                component: () =>
                    import('./views/news/children/index/index.vue'),
            },
            {
                path: 'detail/:id',
                name: 'newsDdetail',
                meta: {
                    title: '绿建要闻 - 详情',
                },
                component: () =>
                    import('./views/news/children/detail/detail.vue'),
            },
        ],
    },
    {
        path: '/cloud',
        name: 'cloud',
        meta: {
            title: '云智库',
        },
        component: () => import('./views/cloud/cloud.vue'),
        redirect: '/cloud/index',
        children: [
            {
                path: 'index',
                name: 'cloudIndex',
                meta: {
                    title: '云智库',
                },
                component: () =>
                    import('./views/cloud/children/index/index.vue'),
            },
            {
                path: 'detail/:id',
                name: 'cloudDetail',
                meta: {
                    title: '云智库',
                },
                component: () =>
                    import('./views/cloud/children/detail/detail.vue'),
            },
        ],
    },
    {
        path: '/mall',
        name: 'mall',
        meta: {
            title: '商城',
        },
        component: () => import('./views/mall/mall.vue'),
        redirect: '/mall/index',
        children: [
            {
                path: 'index',
                name: 'mallIndex',
                meta: {
                    title: '商城-首页',
                },
                component: () =>
                    import('./views/mall/children/index/index.vue'),
            },
            {
                path: 'detail/:id',
                name: 'mallDetail',
                meta: {
                    title: '商城-详情',
                },
                component: () =>
                    import('./views/mall/children/detail/detail.vue'),
            },
        ],
    },
];
export const centerRouter = [
    {
        path: '/center',
        name: 'center',
        meta: {
            title: '个人中心',
        },
        component: () => import('./views/center/center.vue'),
    },
];
let router = new Router({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'default',
            redirect: 'home',
        },
        ...menuRouter,
        ...centerRouter,
    ],
});
router.afterEach(route => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

export default router;
