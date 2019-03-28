import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


export const menuRouter = [{
    path: '/home',
    name: 'home',
    meta: {
        title: '首页'
    },
    component: () => import('./views/home/home.vue')
},
{
    path: '/cases',
    name: 'cases',
    meta: {
        title: '案列库'
    },
    component: () => import('./views/cases/cases.vue'),
    redirect: '/cases/index',
    children: [{
        path: 'index',
        name: 'caseIndex',
        meta: {
            title: '案列库'
        },
        component: () => import('./views/cases/children/index/index.vue')
    },
    {
        path: 'detail/:id',
        name: 'caseDetal',
        meta: {
            title: '案列库详情'
        },
        component: () => import('./views/cases/children/detail/detail.vue')
    }, {
        path: 'trace/:id',
        name: 'caseTrace',
        meta: {
            title: '案列库-项目回顾'
        },
        component: () => import('./views/cases/children/trace/trace.vue')
    }
    ]
},
{
    path: '/originality',
    name: 'originality',
    meta: {
        title: '匠心记'
    },
    component: () => import('./views/originality/originality.vue'),
    children: [{
        path: 'detail/:id',
        name: 'jxjDetail',
        meta: {
            title: '匠心记-详情'
        },
        component: () => import('./views/originality/detail/detail.vue')
    }, {
        path: 'detail/:id',
        name: 'jxjImgDetail',
        meta: {
            title: '匠心记-图文详情'
        },
        component: () => import('./views/originality/detail/detail.vue')
    }]
},
{
    path: '/enterprise',
    name: 'enterprise',
    meta: {
        title: '行业圈'
    },
    component: () => import('./views/enterprise/enterprise.vue')
},
{
    path: '/news',
    name: 'news',
    meta: {
        title: '绿建要闻'
    },
    component: () => import('./views/news/news.vue')
},
{
    path: '/news',
    name: 'news',
    meta: {
        title: '绿建要闻'
    },
    component: () => import('./views/news/news.vue')
}
]
export default new Router({
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        name: 'default',
        redirect: 'home'
    },
    ...menuRouter

    ]
});