import 'babel-polyfill';
import promise from 'es6-promise'
promise.polyfill()

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';





Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');