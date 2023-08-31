// 对于axios进行二次封装
import axios from "axios";

// requests就是axios，我们用户axios的create创建的一个axios实例
const requests = axios.create({
    baseURL:'/api',
    timeout:5000,

})
// 请求拦截器，再发送请求之前，请求拦截器可以检测到，在发送送请求之前做一些业务
requests.interceptors.request.use((config)=>{
    return config
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数，服务器响应数据回来以后，响应拦截器可以检测到，可以完成一些业务
    return res.data
},(error)=>{
    // 相应失败的回调函数
    return Promise.reject(new Error('faile'))
})

export default requests