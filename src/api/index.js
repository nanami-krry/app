// 对api进行统一的管理
import requests from "./request";
import mockRequests from "./mockRequest";
// 三级联动的接口
export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });

export const reqGetBannerList = () => mockRequests.get("/banner");

export const reqGetFloorList = () => mockRequests.get("/floor");
