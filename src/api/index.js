import fetch from '../pubilc/fetch/fetch';

export const domain = 'https:////www.iduilv.com';

//首页
export const home = (params) =>
    fetch.get(`${domain}/Api/Index/Index/`, {
        params: params
    })

//圈子点赞
export const like = (params) =>
    fetch.get(`${domain}/Api/Posts/Like/`, {
        params: params
    })

//首页-获取更多
export const getHomeMore = (params) =>
    fetch.get(`${domain}/Api/Circle/GetMore/`, {
        params: params
    })

//案列库-首页
export const getCase = (params) =>
    fetch.get(`${domain}/Api/Case/Index/`, {
        params: params
    })

//案列库-详情
export const getCaseDetail = (params) =>
    fetch.get(`${domain}/Api/Case/Detail/`, {
        params: params
    })

//案列库-项目回归
export const getProjectEnd = (params) =>
    fetch.get(`${domain}/Api/ProjectEnd/Index/`, {
        params: params
    })