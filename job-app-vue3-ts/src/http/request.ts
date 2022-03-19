import axios from "axios";
import { ElMessage } from "element-plus";
enum MSGS {
    "操作成功" = 200,
    "密码错误" = 201,
    "账号错误" = 202,
    "请求异常" = 999,
}

const $http = axios.create({
    baseURL:'/mock',
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})
// 定义请求拦截器
$http.interceptors.request.use(config => {
    config.headers = config.headers || {};
    config.headers.token = 'wangdachui';
    return config
})
// 定义响应拦截器
$http.interceptors.response.use(res => {
    console.log('响应数据',res.data);
    const code:number = res.data.code;
    if (code !== 200) {
        ElMessage({
            message: MSGS[code],
            grouping: true,
            type: "error",
          });
        return Promise.reject(res.data);
    }else{
        return Promise.resolve(res.data);
    }
},err=>{
    console.log(err);
})
export default $http