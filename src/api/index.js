import fetch from '../pubilc/fetch/fetch';

export const domain = '//www.iduilv.com';

//首页
export const home = (params) =>
    // fetch.post('https://appadmin-api.jdd.com/appadmin/public/safeMobileHandler.do',{
    fetch.post(`${domain}/Api/Index/Index/`, params)

export const footer = (params) =>
    fetch.post(`${domain}/Api/Index/Footer`, params)

//圈子点赞
export const like = (params) =>
    fetch.post(`${domain}/Api/Posts/Like/`, params)

//首页-获取更多
export const getQzMore = (params) =>
    fetch.post(`${domain}/Api/Circle/GetMore/`, params)

//案列库-首页
export const getCase = (params) =>
    fetch.post(`${domain}/Api/Case/Index/`, params)

//案列库-详情
export const getCaseDetail = (params) =>
    fetch.post(`${domain}/Api/Case/Detail/`, params)

//案列库-项目回归
export const getProjectEnd = (params) =>
    fetch.post(`${domain}/Api/ProjectEnd/Index/`, params)

//个人中心
export const userCenter = (params) =>
    fetch.post(`${domain}/Api/User/Index/`, params)

//提交反馈
export const feedBack = (params) =>
    fetch.post(`${domain}/Api/User/Feedback/`, params)

//删除帖子
export const deleteTz = (params) =>
    fetch.post(`${domain}/Api/User/DeletePost/`, params)

//获取图片验证码
export const getPicVFL = (params) =>
    fetch.post(`${domain}/Api/User/PicVerifyForLogin/`, params)

//获取手机验证码
export const getVerifyForSms = (params) =>
    fetch.post(`${domain}/Api/User/GetVerifyForSms/`, params)

//注册登录
export const login = (params) =>
    fetch.post(`${domain}/Api/User/Login/`, params)

//获取登录信息
export const getUserInfo = (params) =>
    fetch.post(`${domain}/Api/User/GetUserInfo/`, params)

//获取案例库首页
export const getCasesInex = (params) =>
    fetch.post(`${domain}/Api/Case/Index/`, params)

//获取案例库详情
export const getCasesDetail = (params) =>
    fetch.post(`${domain}/Api/Case/Detail/`, params)

//获取绿建要闻首页
export const getNewsIndex = (params) =>
    fetch.post(`${domain}/Api/News/Index/`, params)

//获取绿建要闻详情
export const getNewsDetail = (params) =>
    fetch.post(`${domain}/Api/News/Detail/`, params)

//发表评论
export const addReplis = (params) =>
    fetch.post(`${domain}/Api/News/AddReplis/`, params)