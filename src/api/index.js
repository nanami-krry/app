// 对api进行统一的管理
import requests from "./request"

// 三级联动的接口
export const reqCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'})