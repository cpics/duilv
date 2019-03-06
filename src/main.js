import 'babel-polyfill';
import promise from 'es6-promise'
promise.polyfill()

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import login from './components/h-login/index';


Vue.config.productionTip = false;
Vue.prototype.$login = login;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');