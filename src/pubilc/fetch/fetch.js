import axios from 'axios';

let fetch = axios.create({
    timeout: 100 * 1000,
    headers: {
        post: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }
});

fetch.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
fetch.interceptors.response.use(
    response => {
       


        // Do something with response data
        // console.log(response);
        return response.data;
        // if (response.data) {
        //     return response.data;
        // } else {
        //     return response;
        // }

    },
    error => {
        // Do something with response error
        // console.log(eroor);
        return Promise.reject(error);
    }
);

export default fetch;