// 对于axios进行二次封装
import axios from "axios";
// mockRequests就是axios，我们用户axios的create创建的一个axios实例
const mockRequests = axios.create({
    baseURL:'/mock',
    timeout:5000,

})
// 请求拦截器，再发送请求之前，请求拦截器可以检测到，在发送送请求之前做一些业务
mockRequests.interceptors.request.use((config)=>{
    return config
})
//响应拦截器
mockRequests.interceptors.response.use((res)=>{
    return res.data
},(error)=>{
    // 相应失败的回调函数
    return Promise.reject(new Error('faile'))
})

export default mockRequests