import fetch from '../pubilc/fetch/fetch';

export const domain = '//www.iduilv.com';
// export const domain = '//test.cn';

//首页
export const home = params =>
    // fetch.post('https://appadmin-api.jdd.com/appadmin/public/safeMobileHandler.do',{
    fetch.post(`${domain}/Api/Index/Index/`, params);

export const footer = params =>
    fetch.post(`${domain}/Api/Index/Footer`, params);

//圈子点赞
export const like = params => fetch.post(`${domain}/Api/Posts/Like/`, params);

//首页-获取更多
export const getQzMore = params =>
    fetch.post(`${domain}/Api/Circle/GetMore/`, params);

//案列库-首页
export const getCase = params =>
    fetch.post(`${domain}/Api/Case/Index/`, params);

//案列库-详情
export const getCaseDetail = params =>
    fetch.post(`${domain}/Api/Case/Detail/`, params);

//案列库-项目回归
export const getProjectEnd = params =>
    fetch.post(`${domain}/Api/ProjectEnd/Index/`, params);

//个人中心
export const userCenter = params =>
    fetch.post(`${domain}/Api/User/Index/`, params);

//提交反馈
export const feedBack = params =>
    fetch.post(`${domain}/Api/User/Feedback/`, params);

//删除帖子
export const deleteTz = params =>
    fetch.post(`${domain}/Api/User/DeletePost/`, params);

// //获取图片验证码
// export const getPicVFL = (params) =>
//     fetch.post(`${domain}/Common/VerifyCode/`, params)

// //获取图片验证码
// export const checkPicVFL = (params) =>
//     fetch.post(`${domain}/Common/CheckVerify`, params)

//获取手机验证码
export const getVerifyForSms = params =>
    fetch.post(`${domain}/Api/Common/GetSmsVerifyCode/`, params);
    // fetch.post(`${domain}/Api/Common/GetTestSmsCode/`, params);

//注册登录
export const login = params => fetch.post(`${domain}/Api/User/Login/`, params);

//获取登录信息
export const getUserInfo = params =>
    fetch.post(`${domain}/Api/User/GetUserInfo/`, params);

//获取案例库首页
export const getCasesInex = params =>
    fetch.post(`${domain}/Api/Case/Index/`, params);

//获取案例库详情
export const getCasesDetail = params =>
    fetch.post(`${domain}/Api/Case/Detail/`, params);

//获取绿建要闻首页
export const getNewsIndex = params =>
    fetch.post(`${domain}/Api/News/Index/`, params);

//获取绿建要闻详情
export const getNewsDetail = params =>
    fetch.post(`${domain}/Api/News/Detail/`, params);

//发表绿建要闻评论
export const addReplis = params =>
    fetch.post(`${domain}/Api/News/AddReplis/`, params);

export const getReplies = params =>
    fetch.post(`${domain}/Api/Posts/GetReplies/`, params);
//匠心记
//天气接口
export const getWeather = params =>
    fetch.post(`${domain}/Api/Index/Weather/`, params);

//匠心记列表
export const getJxjList = params =>
    fetch.post(`${domain}/Api/ProjectLog/Index/`, params);

//匠心记详情
export const getJxjDetail = params =>
    fetch.post(`${domain}/Api/ProjectLog/Detail/`, params);

//匠心记项目日志
export const getJxjLog = params =>
    fetch.post(`${domain}/Api/ProjectLog/GetData/`, params);

//匠心记帖子详情
export const getJxjPostDetail = params =>
    fetch.post(`${domain}/Api/ProjectLog/PostDetail/`, params);

//匠心记签到详情
export const getJxjSignInfos = params =>
    fetch.post(`${domain}/Api/ProjectLog/GetSignInfos/`, params);

//匠心记发表评论
export const jxjAddReplis = params =>
    fetch.post(`${domain}/Api/ProjectLog/AddReplis/`, params);

//上传图片
export const uploadImage = params =>
    fetch.post(`${domain}/Api/Common/UploadImage/`, params);

//上传图片2
export const uploadImageByBlob = params =>
    fetch.post(`${domain}/Api/Common/UploadImageByBlob/`, params);

//上传图片3
export const uploadImageByBase = params =>
    fetch.post(`${domain}/Api/Common/UploadImageByBase/`, params);

//匠心记获取标签
export const getJxjTags = params =>
    fetch.post(`${domain}/Api/ProjectLog/GetTags/`, params);

//匠心记获取人员列表
export const GetJxjProUsers = params =>
    fetch.post(`${domain}/Api/ProjectLog/GetProUsers/`, params);

//匠心记申请
export const jxjAddProjectLog = params =>
    fetch.post(`${domain}/Api/ProjectLog/AddProjectLog/`, params);

//-----------------行业圈--------------
//获取全部
export const getAllEnter = params =>
    fetch.post(`${domain}/Api/EnterPrise/GetAllEnter/`, params);

//猜你想看
export const getLikeEnter = params =>
    fetch.post(`${domain}/Api/EnterPrise/GetLikeEnter/`, params);

//行业圈首页
export const enterPriseIndex = params =>
    fetch.post(`${domain}/Api/EnterPrise/Index`, params);

//企业首页
export const enterCurrentIndex = params =>
    fetch.post(`${domain}/Api/EnterPrise/EnterIndex/`, params);

//企业详情
export const enterDetail = params =>
    fetch.post(`${domain}/Api/EnterPrise/EnterDetail/`, params);

//发飙评论
export const enterAddReplis = params =>
    fetch.post(`${domain}/Api/EnterPrise/AddReplis/`, params);

//-------------云智库------
//云智库首页
export const yzkIndex = params =>
    fetch.post(`${domain}/Api/Yzk/Index/`, params);

//云智库详情
export const yzkDetail = params =>
    fetch.post(`${domain}/Api/Yzk/Detail/`, params);

//云智库评论
export const yzkAddReplis = params =>
    fetch.post(`${domain}/Api/Yzk/AddReplis/`, params);
