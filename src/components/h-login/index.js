import Vue from 'vue';
import login from './h-login.vue';

let instance;
const LoginConstructor = Vue.extend(login);

const initInstance = () => {
    instance = new LoginConstructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}

const Login = function (options, callback) {
    if (!instance) {
        initInstance();
    }

    instance.type = options.type;
    instance.showDir = options.showDir;
    instance.$off('login');
    if (callback) {
        instance.$on('login', callback);
    }
}
Login.show = (type, callback) => {
    Login({
        type,
        showDir: true
    }),
    callback
};
Login.close = () => {
    Vue.nextTick(() => {
        instance.showDir = false;
    })
}

export default Login;