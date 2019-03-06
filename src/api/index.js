import fetch from '../pubilc/fetch/fetch';

export const domain = '//www.iduilv.com';

//首页
export const home = (params) =>
    // fetch.post('https://appadmin-api.jdd.com/appadmin/public/safeMobileHandler.do',{
    fetch.post(`${domain}/Api/Index/Index/`, {
        params
    })

export const footer = (params) =>
    fetch.post(`${domain}/Api/Index/Footer`, {
        params
    })

//圈子点赞
export const like = (params) =>
    fetch.post(`${domain}/Api/Posts/Like/`, {
        params
    })

//首页-获取更多
export const getQzMore = (params) =>
    fetch.post(`${domain}/Api/Circle/GetMore/`, {
        params
    })

//案列库-首页
export const getCase = (params) =>
    fetch.post(`${domain}/Api/Case/Index/`, {
        params
    })

//案列库-详情
export const getCaseDetail = (params) =>
    fetch.post(`${domain}/Api/Case/Detail/`, {
        params
    })

//案列库-项目回归
export const getProjectEnd = (params) =>
    fetch.post(`${domain}/Api/ProjectEnd/Index/`, {
        params
    })