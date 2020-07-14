import Vue from 'vue'
import axios from 'axios'
import {baseURL} from "../api/config";
import {getToken} from "./auth";

axios.defaults.timeout = 5000;
axios.defaults.baseURL = baseURL;



axios.interceptors.request.use(config => {
    //console.log(config);

    if (config.headers['Content-Type'] === "application/x-www-form-urlencoded") {
        config.data = JSON.stringify(config.data);
    }

    if (getToken()) {
        config.headers['x-auth-token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    return config
}, error => {

    return Promise.reject(error)
});

axios.interceptors.response.use(response => {
    //console.log(response);
    return response
}, err => {
    console.log(err);
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                console.log('错误请求')
                break;
            case 401:
                console.log('未授权，请重新登录')
                break;
            case 403:
                console.log('拒绝访问')
                break;
            case 404:
                console.log('请求错误,未找到该资源')
                break;
            case 405:
                console.log('请求方法未允许')
                break;
            case 408:
                console.log('请求超时')
                break;
            case 500:
                console.log('服务器端出错')
                break;
            case 501:
                console.log('网络未实现')
                break;
            case 502:
                console.log('网络错误')
                break;
            case 503:
                console.log('服务不可用')
                break;
            case 504:
                console.log('网络超时')
                break;
            case 505:
                console.log('http版本不支持该请求')
                break;
            default:
                console.log(`连接错误${err.response.status}`)
        }
    } else {
        console.log('连接到服务器失败');
    }
    return Promise.resolve(err.response)
})


export default axios