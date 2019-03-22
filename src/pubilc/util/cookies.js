import Cookies from 'js-cookie';

export default {
    set: function (key, value, option) {
        Cookies.set(key, value, option);
    },

    get: function (key) {
        let v = Cookies.get(key);
        try {
            return JSON.parse(v);
        } catch (error) {
            return v;
        }
    },

    remove: function (key, option) {
        Cookies.remove(key, option);
    }
};
