import * as Cookies from 'js-cookie';

export default {
    set(key, value, option = {}) {
        if (Object.prototype.toString.call(value) === '[object String]') {
            Cookies.set(key, value, option);
        } else {
            Cookies.set(key, JSON.stringify(value), option);
        }
    },

    get(key) {
        const v = Cookies.get(key);
        try {
            return JSON.parse(v);
        } catch (error) {
            return v;
        }
    },

    remove(key, option) {
        Cookies.remove(key, option);
    },
};
