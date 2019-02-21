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
    component: () => import('./views/cases/cases.vue')
},
{
    path: '/originality',
    name: 'originality',
    meta: {
        title: '匠心记'
    },
    component: () => import('./views/originality/originality.vue')
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