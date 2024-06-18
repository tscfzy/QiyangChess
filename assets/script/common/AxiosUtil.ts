import { _decorator, Component, Node } from 'cc';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8686';

export class AxiosUtil {
    
    /**
     * @description: GET请求
     * @author: 虾仁猪心
     * @date: 2024-06-11 18:36:14
     */
    public get(url, params) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                baseURL: BASE_URL,
                headers: {userCode: localStorage.getItem("userCode")},
                url: url,
                params: params
            }).then((response: any) => {
                resolve(response.data);
            }).catch((error: any) => {
                reject(error);
            });
        });
    }

    public post(url, params) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                baseURL: BASE_URL,
                headers: {userCode: localStorage.getItem("userCode")},
                url: url,
                params: params
            }).then(function (response) {
                resolve(response.data);
            }).catch(function (error) {
                reject(error);
            });
        });
    }

}

export default new AxiosUtil();