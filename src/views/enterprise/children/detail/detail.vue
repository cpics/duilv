<template>
    <!--页面主体-->
    <div class="g-container">
        <!--详情头部-->
        <div class="com-detail-hd">
            <div class="com-hd-inner">
                <div class="com-hd-info">
                    <div class="com-hd-face">
                        <img :src="detail.icon"
                             alt>
                    </div>
                    <div class="com-hd-name">
                        <div class="hd-bottom-td">
                            <div class="hd-name-row">{{detail.title}}</div>
                            <!--今日信息-->
                            <!--<div class="hd-name-row">-->
                            <!--<span>今天</span>-->
                            <!--<span>2017年3月18日</span>-->
                            <!--<span>星期三</span>-->
                            <!--<span>天气：晴</span>-->
                            <!--</div>-->
                        </div>
                    </div>
                </div>
                <!--右侧操作-->
                <div class="com-hd-handle">
                    <div class="hd-bottom-td">
                        <!-- <span class="cm-sign-btn">签到详情</span> -->
                        <h-qrcode></h-qrcode>
                    </div>
                </div>
            </div>
        </div>
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <router-link tag="a"
                             class="c-crumbs"
                             :to="{name:'default'}">首页</router-link>
                <span class="c-sep">&gt;</span>
                <router-link tag="a"
                             class="c-crumbs"
                             :to="{name:'enterIndex'}">行业圈</router-link>

                <span class="c-sep">&gt;</span>
                <span class="c-current">{{detail.title}}</span>
            </div>
            <!--项目回顾-->
            <div class="g-normal-content">
                <div class="m-normal-tabs">
                    <dl>
                        <dd :class="{'active':menu[0] == 1}"
                            @click="showDetail(0)">企业简介</dd>
                        <dd :class="{'active':menu[1] == 1}"
                            @click="showDetail(1)">企业动态</dd>
                        <dd :class="{'active':menu[2] == 1}"
                            @click="showDetail(2)">信息管理</dd>
                        <dd :class="{'active':menu[3] == 1}"
                            @click="showDetail(3)">投诉</dd>
                        <dd :class="{'active':menu[4] == 1}"
                            @click="showDetail(4)">课程培训</dd>
                    </dl>
                </div>
                <div class="m-normal-box">
                    <!--企业简介 显示 +show-->
                    <div class="u-normal-main show"
                         v-if="menu[0]">
                        <div class="news-article">
                            <p v-html="desc"></p>
                        </div>
                        <!--编辑按钮-->
                        <div class="fix-editor-btn"
                             @click="gotoEdit()"></div>
                    </div>
                    <!--企业动态 显示 +show-->
                    <div class="u-normal-main m-structure-content show"
                         v-if="menu[1]==1">
                        <div class="m-structure-information">
                            <div class="m-prise-content">
                                <div class="e-prise-box"
                                     v-for="(item,i) in list"
                                     :key="i">
                                    <div class="prise-hd">
                                        <div class="prise-face">
                                            <img :src="item.icon">
                                        </div>
                                        <div class="prise-hd-info">
                                            <div class="prise-hd-name">{{item.enterName}}</div>
                                            <div class="prise-time">12小时前</div>
                                        </div>
                                    </div>
                                    <div class="prise-article">
                                        <div class="prise-art-name">
                                            <b>{{item.title}}</b>
                                            <span class="art-tips"
                                                  v-if="item.type.length>0">{{item.type}}</span>
                                        </div>
                                        <div class="view-more-prise"
                                             :class="{'active':!item.zkDir}">

                                            <div class="prise-art-txt"
                                                 v-html="item.content"></div>
                                            <div class="view-more-txt unfold"
                                                 v-if="!item.zkDir"
                                                 @click.stop.prevent="zkFunc(i)">
                                                查看更多
                                                <i></i>
                                            </div>
                                            <div class="view-more-txt fewer"
                                                 v-if="item.zkDir"
                                                 @click.stop.prevent="zkFunc(i)">
                                                收起
                                                <i></i>
                                            </div>
                                        </div>
                                        <div class="cp-column hover-scale middle-pic">
                                            <div class="cp-item"
                                                 v-for="(img,m) in item.images"
                                                 :key="m">
                                                <img :src="img">
                                            </div>
                                        </div>
                                        <div class="u-news-handle">
                                            <div class="un-left"
                                                 v-if="item.addr.length>0">
                                                <span class="un-col c-grey-9">
                                                    <i class="address-icon"></i>
                                                    {{item.addr}}
                                                </span>
                                            </div>
                                            <div class="un-right">
                                                <span class="un-col">
                                                    <!--选中 +active-->
                                                    <i class="like-icon"
                                                       :class="{'active':item.isLike}"></i>
                                                    {{item.likes}}
                                                </span>
                                                <span class="un-col u-pointer">
                                                    <i class="n-small-icon comment-icon"></i>
                                                    {{item.repNum}}
                                                    <em class="c-arrow-up"></em>
                                                </span>
                                                <!-- <span class="un-col u-pointer">
                          <i class="n-small-icon share-s-icon"></i>
                          588
                          <span class="share-code-pop">
                            <em class="c-arrow-up-border"></em>
                            <span class="s-code-pic">
                              <img src alt>
                            </span>
                          </span>
                        </span>-->
                                            </div>
                                        </div>
                                        <div class="comment-box">
                                            <div class="prise-comment">
                                                <div class="comment-list">
                                                    <ul>
                                                        <li v-for="(rep,r) in item.reps"
                                                            :key="r">
                                                            <div class="comment-face">
                                                                <img src
                                                                     alt>
                                                            </div>
                                                            <div class="comment-info">
                                                                <div class="comment-name">{{rep.nickName}}</div>
                                                                <div class="comment-msg">{{rep.content}}</div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button style="margin-top:30px;"
                                    v-if="count < list.length"
                                    @click="more"
                                    type="button"
                                    class="prompt-txt">加载更多</button>
                        </div>
                        <div class="m-structure-quick">
                            <div class="structure-btn"
                                 @click="showPop()">写动态</div>
                            <div class="structure-box clock-in"
                                 v-if="todaySings.length>0">
                                <div class="clock-list">
                                    <div class="clock-today">
                                        <h4>今日打卡</h4>
                                        <!-- <div class="clock-search-date">
                                            <input placeholder="" value="2019年1月1日"/>
                                            <span>2019年1月1日</span>
                                            <i class="s-search-btn"></i>
                                        </div> -->
                                    </div>
                                    <ul>
                                        <li v-for="(sing,s) in todaySings" :key="s">
                                            <div class="clock-hd">
                                                <div class="clock-face">
                                                    <img :src="sing.headImage"
                                                         alt>
                                                </div>
                                                <div class="clock-info">
                                                    <div class="clock-name">{{sing.nickName}}</div>
                                                    <p>{{sing.signTime.split(' ')[0]}}</p>
                                                    <p>{{sing.signTime.split(' ')[1]}}</p>
                                                </div>
                                                <div class="clock-address">
                                                    <i class="address-icon"></i>
                                                    <span>{{sing.signAddr}}</span>
                                                </div>
                                                <!--<div class="sign-handle">-->
                                                <!--<span class="sign-btn">在此签到</span>-->
                                                <!--</div>-->
                                            </div>
                                        </li>
                                    
                                    </ul>
                                </div>
                            </div>
                            <div class="structure-box">
                                <div class="common-tit-h2">
                                    <b>猜你想看</b>
                                    <!-- <a href
                                       class="more-tit-btn">全部&gt;</a> -->
                                </div>
                                <div class="guess-like">
                                    <router-link tag="a"
                                                 class="guess-item"
                                                 :to="{name:'enterDetail',params:{id:item.id}}"
                                                 v-for="(item,i) in likeArr"
                                                 :key="i">
                                        <div class="guess-face">
                                            <img :src="item.icon">
                                        </div>
                                        <div class="guess-info">{{item.title}}</div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--信息管理 显示 +show-->
                    <div class="u-normal-main show"
                         v-if="menu[2] ==1">
                        <div class="info-msg-manage">
                            <div class="info-msg-col">
                                <div class="info-msg-row">
                                    <span class="i-label">公司LOGO：</span>
                                    <span class="i-company-face">
                                        <img :src="detail.picPath">
                                    </span>
                                    <span class="i-msg-btn"
                                          @click="changeImg()">更换</span>
                                    <input style="display:none;"
                                           type="file"
                                           id="imgFile"
                                           name="file"
                                           @change="uploadImg()"
                                           ref="imgFileInput"
                                           accept="image/png, image/jpeg, image/gif, image/jpg">
                                </div>
                                <div class="info-msg-row">
                                    <span class="i-label">公司名称：</span>
                                    <span v-show="showRetitle"
                                          class="i-company-name">{{detail.title}}</span>
                                    <input v-show="!showRetitle"
                                           class="i-company-name"
                                           type="text"
                                           placeholder
                                           v-model="reTitle">
                                    <span class="i-msg-btn"
                                          v-show="showRetitle"
                                          @click="showReFunc">重命名</span>
                                    <span class="i-msg-btn"
                                          v-show="!showRetitle"
                                          @click="saveTitle">保存</span>
                                </div>
                                <div class="info-msg-row">
                                    <span class="i-label">项目地址：</span>
                                    <span class="i-company-address">{{detail.proAddr}}</span>
                                </div>
                                <div class="i-msg-tipper">（用于项目签到显示，请在手机定位修改以及添加）</div>
                            </div>
                            <div class="info-msg-col">
                                <div class="i-member-list">
                                    <h2>负责人：</h2>
                                    <div class="member-edit-btn"
                                         @click="showEditPersonFunc()"
                                         v-show="!editPersonDir">编辑+</div>
                                    <li v-for="(item,i) in detail.proUsers"
                                        :key="i">
                                        <div class="i-member-face">
                                            <img :src="item.headImage">
                                        </div>
                                        <div class="i-member-name">{{item.nickName}}</div>
                                        <div class="i-member-handle"
                                             v-show="editPersonDir">
                                            <span class="i-msg-btn"
                                                  @click="delPerson(i)">删除</span>
                                            <em>|</em>
                                            <span class="i-msg-btn"
                                                  @click="showEidt(i,true)">更换</span>
                                        </div>
                                        <div class="member-opt-input show"
                                             v-if="item.showEidt">
                                            <input type="text"
                                                   v-model="item.searchPhone"
                                                   v-on:input="getUserByPhone(2,item.searchPhone,item)"
                                                   placeholder="请输入更换人的手机号">
                                            <span class="mem-nike-name">{{item.searchName}}</span>
                                            <div class="i-member-handle">
                                                <span class="i-msg-btn"
                                                      @click="editPersonFunc(i,item.editPerson)">确定</span>
                                                <em>|</em>
                                                <span class="i-msg-btn"
                                                      @click="showEidt(i,false)">取消</span>
                                            </div>
                                        </div>
                                    </li>

                                    <div class="member-opt-input"
                                         v-show="addPersonDir">
                                        <input type="text"
                                               v-model="addPersonPhone"
                                               v-on:input="getUserByPhone(1,addPersonPhone)"
                                               placeholder="请输入添加人的手机号">
                                        <span class="mem-nike-name">{{addPersonName}}</span>
                                        <div class="i-member-handle">
                                            <span class="i-msg-btn"
                                                  @click="addPersonFunc()">保存</span>
                                            <em>|</em>
                                            <span class="i-msg-btn"
                                                  @click="showAddPersonFunc()">取消</span>
                                        </div>
                                    </div>
                                    <div class="member-opt-bottom"
                                         v-show="editPersonDir">
                                        <div class="member-add-btn"
                                             v-show="!addPersonDir">
                                            <span class="mem-add-btn"
                                                  @click="showAddPersonFunc()">+添加更多人员</span>
                                        </div>
                                        <div class="member-finish-btn">
                                            <span class="mem-finish-btn"
                                                  @click="saveAllPerson()">完成</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--投诉 显示 +show-->
                    <div class="u-normal-main show"
                         v-if="menu[3] ==1">
                        <div class="write-complain-btn">
                            <span class="write-btn"
                                  @click="showks">写客诉</span>
                        </div>
                        <div class="m-prise-content">
                            <div class="e-prise-box has-border"
                                 v-for="(item,i) in Complaints"
                                 :key="i">
                                <div class="prise-article">
                                    <div class="prise-art-name">
                                        <b>{{item.title}}</b>
                                        <div class="prise-time">{{item.createdTime}}</div>
                                    </div>
                                    <div class="prise-art-txt">{{item.content}}</div>
                                    <div class="cp-column hover-scale pic-260">
                                        <div class="cp-item"
                                             v-for="(img,m) in item.imgs"
                                             :key="m">
                                            <img :src="img"
                                                 alt>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--课程 显示 +show-->
                    <div class="u-normal-main show"
                         v-if="menu[4] ==1 ">
                        <div class="course-list dole">
                            <router-link tag="a"
                                         :to="{name:'enterCourse',params:{id:item.id}}"
                                         class="course-item"
                                         v-for="(item,i) in courseList"
                                         :key="i">
                                <!--显示 +show-->
                                <i class="dole-icon show"
                                   v-if="item.isNew">NEW</i>
                                <i class="dole-icon show"
                                   v-if="item.isHot">HOT</i>
                                <div class="course-pic">
                                    <img :src="item.picPath"
                                         alt>
                                </div>
                                <h2 class="course-tit">{{item.title}}</h2>
                                <div class="course-txt">
                                    <span>{{item.level == 1?'初级':(item.level == 2?'中级':'高级')}}</span>
                                    <em class="course-circle">·</em>
                                    <span>{{item.hits}}人在学</span>
                                </div>
                                <div class="course-handle">
                                    <span class="course-money">￥{{item.price}}元</span>
                                    <i class="star-icon"
                                       :class="'star-'+item.score"></i>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--写动态 显示 +show-->
        <div class="shadow-fixed show"
             v-if="popDir">
            <div class="mask"></div>
            <div class="bomb-com-box">
                <div class="bomb-small-close"
                     @click="showPop"></div>
                <div class="dynamic-form">
                    <div class="dynamic-row">
                        <input type="text"
                               v-model="form.title"
                               placeholder="请填写主题名" />
                    </div>
                    <div class="dynamic-row">
                        <span class="dynamic-tip"
                              @click="choosePostType(item.id)"
                              :class="{'active':form.type == item.id}"
                              v-for="(item,i) in postType"
                              :key="i">{{item.typeName}}</span>
                    </div>
                    <div class="dynamic-row">
                        <textarea v-model="form.content"
                                  placeholder="请输入内容..."></textarea>
                    </div>
                    <div class="dynamic-row">
                        <div class="dynamic-pic">
                            <div class="dynamic-col"
                                 v-for="(item,i) in form.images"
                                 :key="i">
                                <img :src="item"
                                     alt="">
                                <i class="circle-close-btn"
                                   @click="delImg(i)"></i>
                            </div>
                            <div class="dynamic-col">
                                <button class="upload-btn">添加图片</button>
                                <input type="file"
                                       id="imgFile"
                                       name="file"
                                       @change="uploadPostImg()"
                                       ref="postImgFileInput"
                                       accept="image/png, image/jpeg, image/gif, image/jpg">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bomb-bottom-btn">
                    <span class="bo-pop-btn bg-grey"
                          @click="cancelPop">取消并返回</span>
                    <span class="bo-pop-btn"
                          @click="AddEnterPost">发表</span>
                </div>
            </div>
        </div>
        <!--写客述 显示 +show-->
        <div class="shadow-fixed show"
             v-if="ksDir">
            <div class="mask"></div>
            <div class="bomb-com-box">
                <div class="bomb-small-close"
                     @click="showks"></div>
                <div class="dynamic-form">
                    <div class="dynamic-row">
                        <input type="text"
                               v-model="ksForm.title"
                               placeholder="请输入投诉标题" />
                    </div>
                    <div class="dynamic-row">
                        <textarea v-model="ksForm.content"
                                  placeholder="请输入正文内容..."></textarea>
                    </div>
                    <div class="dynamic-row">
                        <div class="dynamic-pic">
                            <div class="dynamic-col"
                                 v-for="(item,i) in ksForm.imgs"
                                 :key="i">
                                <img :src="item"
                                     alt="">
                                <i class="circle-close-btn"
                                   @click="delKsImg(i)"></i>
                            </div>

                            <div class="dynamic-col">
                                <button class="upload-btn">添加图片</button>
                                <input type="file"
                                       id="ksFile"
                                       name="file"
                                       @change="uploadKsImg()"
                                       ref="ksImgFileInput"
                                       accept="image/png, image/jpeg, image/gif, image/jpg">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bomb-bottom-btn">
                    <span class="bo-pop-btn bg-grey"
                          @click="showks">取消</span>
                    <span class="bo-pop-btn"
                          @click="AddEnterComplaint">发表</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../../../html/components/crumbs/crumbs.scss';

import '../../../../html/components/detailHd/detailHd.scss';
import '../../../../html/components/tabs/tabs.scss';

import '../../../../html/components/article/article.scss';

import '../../../../html/components/structure/structure.scss';
import '../../../../html/components/enterprise/enterprise.scss';
import '../../../../html/components/picture/picture.scss';
import '../../../../html/components/comments/comments.scss';
import '../../../../html/pages/enterprise/details/details.scss';
import '../../../../html/components/course/course.scss';

import hQrcode from '../../../../components/h-qrcode/h-qrcode';

import '../../../../html/components/popCommon/popCommon.scss';
import '../../../../html/components/dynamic/dynamic.css';

import {
    enterDetail,
    enterCurrentIndex,
    enterDesc,
    getLikeEnter,
    getEnterComplaint,
    enterCourseIndex,
    updateEnterName,
    uploadImage,
    updateEnterIcon,
    getUserByPhone,
    updateEnterUsers,
    AddEnterPost,
    GetEnterPostTypes,
    GetTodaySign,
    AddEnterComplaint,
} from '../../../../api/index';
export default {
    name: 'enterDetail',
    data() {
        return {
            ksDir: false,
            todaySings: [],
            popDir: false,
            postType: [],
            menu: [0, 1, 0, 0, 0],
            detail: {},
            list: [],
            count: 0,
            likeArr: [],
            desc: '',
            Complaints: [],
            courseList: [],
            showRetitle: true,
            editPersonDir: false,
            addPersonDir: false,
            addPersonPhone: '',
            addPersonName: '',
            addPerson: {},
            reTitle: '',
            params: {
                index: 0,
                size: 10
            },
            form: {
                id: this.$route.params.id,
                title: '',
                type: '',
                content: '',
                images: []
            },
            ksForm: {
                id: this.$route.params.id,
                title: '',
                content: '',
                imgs: []
            },
            ksRules: {
                title: [
                    { required: true, message: '请填写投诉标题!' }
                ],
                content: [
                    { required: true, message: '请填写正文内容!' }
                ],
                imgs: [
                    { required: true, message: '请添加图片!' }
                ]
            },
            rules: {
                title: [
                    { required: true, message: '请填写主体名称!' }
                ],
                type: [
                    { required: true, message: '请选择动态类型!' }
                ],
                content: [
                    { required: true, message: '请填写动态内容!' }
                ],
                images: [
                    { required: true, message: '请添加图片!' }
                ]
            }
        };
    },
    components: {
        hQrcode
    },
    // computed: {
    //     getLeavel(l) {
    //         let str = '';
    //         if (l == 1) {
    //             str = '初级';
    //         } else if (l == 2) {
    //             str = '中级';
    //         } else if (l == 3) {
    //             str = '高级';
    //         }
    //         return str;
    //     }
    // },
    methods: {
        showPop() {
            this.popDir = !this.popDir;
        },
        showks() {
            this.ksDir = !this.ksDir;
        },
        cancelPop() {
            this.form.title = '';
            this.form.type = '';
            this.form.content = '';
            this.form.images = [];
            this.showPop();
        },
        async GetEnterPostTypes() {
            let res = await GetEnterPostTypes();
            if (res.Type == 'Success') {
                this.postType = res.Data;
            }
        },
        async GetTodaySign() {
            let res = await GetTodaySign({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                this.todaySings = res.Data;
            }
        },
        choosePostType(type) {
            this.form.type = type;
        },
        delImg(i) {
            this.form.images.splice(i, 1);
        },
        //写动态-上传图片
        async uploadPostImg() {

            let file = this.$refs.postImgFileInput.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            let that = this;
            reader.onload = async function (e) {
                let res = await uploadImage({
                    file: file
                });
                if (res.Type == 'Success') {
                    that.form.images.push(res.Data);
                    console.log(that.form.images);
                }
            };
        },
        delKsImg(i) {
            this.ksForm.imgs.splice(i, 1);
        },
        //写客诉-上传图片
        async uploadKsImg() {

            let file = this.$refs.ksImgFileInput.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            let that = this;
            reader.onload = async function (e) {
                let res = await uploadImage({
                    file: file
                });
                if (res.Type == 'Success') {
                    that.ksForm.imgs.push(res.Data);
                    // console.log(that.form.images);
                }
            };
        },
        //写投诉
        async AddEnterComplaint() {
            let validator = new this.$validator(this.ksRules);
            let model = this.ksForm;
            validator.validate(model, async (errors, fields) => {
                if (!errors) {
                    let res = await AddEnterComplaint(this.ksForm);
                    if (res.Type == 'Success') {
                        this.$layer.alert(res.Content);
                        this.getEnterComplaint();
                    } else {
                        this.$layer.alert(res.Content);
                    }
                } else {
                    this.$layer.alert(errors[0].message);

                }
            });
        },
        async AddEnterPost() {
            let validator = new this.$validator(this.rules);
            let model = this.form;
            validator.validate(model, async (errors, fields) => {
                if (!errors) {
                    let res = await AddEnterPost(this.form);
                    if (res.Type == 'Success') {
                        this.$layer.alert(res.Content);
                        // this.init();
                        // this.enterCurrentIndex();
                    } else {
                        this.$layer.alert(res.Content);
                    }
                } else {
                    this.$layer.alert(errors[0].message);

                }
            });
        },
        showReFunc() {
            this.showRetitle = !this.showRetitle;
        },
        //去编辑
        gotoEdit() {
            this.$router.push({
                name: 'enterEdit',
                params: { id: this.$route.params.id }
            });
        },
        //更新公司LOGO
        changeImg() {
            document.querySelector('#imgFile').click();
        },
        //显示更换的修改input
        showEidt(i, dir) {
            this.detail.proUsers[i].showEidt = dir;
        },
        clearAddPerson() {
            this.addPerson = {};
            this.addPersonPhone = '';
            this.addPersonName = '';
        },
        clearEditPerson(type, i) {
            //type 1代表全部，2代表单个
            if (type == 1) {
                this.detail.proUsers.forEach(item => {
                    item.searchName = '';
                    item.searchPhone = '';
                    item.editPerson = {};
                });
            } else {
                this.detail.proUsers[i].searchName = '';
                this.detail.searchPhone = '';
                this.detail.editPerson = {};
            }
        },
        //删除人员
        delPerson(i) {
            this.detail.proUsers.splice(i, 1);
        },
        //添加按钮操作
        addPersonFunc() {
            this.detail.proUsers.push(this.addPerson);
            this.clearAddPerson();
        },
        //更换人员按钮操作
        editPersonFunc(i, person) {
            this.detail.proUsers.splice(i, 1, person);
            this.showEidt(i, false);
            this.clearEditPerson(2, i);
        },
        //保存所有人员操作
        async saveAllPerson() {
            let arr = [];
            this.detail.proUsers.forEach(item => {
                arr.push(item.id);
            });
            // arr = [76,15287,15391];

            let res = await updateEnterUsers({
                id: this.$route.params.id,
                userIds: arr
            });
            if (res.Type == 'Success') {
                this.$layer.alert(res.Content);
                this.clearAddPerson();
                this.clearEditPerson(1);
            } else {
                this.$layer.alert(res.Content);
            }
        },
        //通过手机号获取用户信息
        async getUserByPhone(type, phone, item) {
            console.log(1);
            //1是添加，2是修改Type
            if (phone == '') {
                if (type == 1) {
                    this.addPersonName = '这里显示昵称';
                } else {
                    item.searchName = '这里显示昵称';
                }
                return false;
            }
            if (!/^1[34578]\d{9}$/.test(phone)) {
                if (phone.length == 11) {
                    if (type == 1) {
                        this.addPersonName = '号码不正确';
                    } else {
                        item.searchName = '号码不正确';
                    }
                }
                return false;
            }
            let repeatDir = false;
            this.detail.proUsers.forEach(item => {
                if (item.phone == phone) {
                    repeatDir = true;
                }
            });
            if (repeatDir) {
                if (type == 1) {
                    this.addPersonName = '已重复';
                } else {
                    item.searchName = '已重复';
                }
                return false;
            }

            if (type == 1) {
                this.addPersonName = '正在查询';
            } else {
                item.searchName = '正在查询';
            }

            let res = await getUserByPhone({
                phone: phone
            });
            if (res.Type == 'Success') {
                let person = {
                    id: res.Data.Id,
                    nickName: res.Data.NickName,
                    headImage: res.Data.HeadImage,
                    phone: phone
                };
                if (type == 1) {
                    this.addPerson = person;
                    this.addPersonName = person.nickName;
                } else {
                    item.editPerson = person;
                    item.searchName = person.nickName;
                }
            } else {
                if (type == 1) {
                    this.addPersonName = '查无此人';
                } else {
                    item.searchName = '查无此人';
                }
            }
        },
        //更新公司LOGO
        async uploadImg() {

            let file = this.$refs.imgFileInput.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            let that = this;
            reader.onload = async function (e) {
                let res = await uploadImage({
                    file: file
                });
                if (res.Type == 'Success') {
                    let editRes = updateEnterIcon({
                        id: that.$route.params.id,
                        picPath: res.Data
                    });
                    if (editRes.Type == 'Success') {
                        that.detail.picPath = res.Data;
                    }
                }
            };
        },

        showEditPersonFunc() {
            this.editPersonDir = !this.editPersonDir;
        },
        showAddPersonFunc() {
            this.addPersonDir = !this.addPersonDir;
        },

        //保存修改企业名称
        async saveTitle() {
            let res = await updateEnterName({
                id: this.$route.params.id,
                title: this.reTitle
            });
            if (res.Type == 'Success') {
                this.$layer.alert('修改成功');
                this.detail.title = this.reTitle;
                this.showReFunc();
            }
        },

        showDetail(i) {
            this.menu = [0, 0, 0, 0, 0];
            this.menu[i] = 1;
        },
        //企业详情~信息管理
        async enterDetail() {
            let res = await enterDetail({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                res.Data.proUsers.forEach(item => {
                    item.showEidt = false;
                    item.searchPhone = '';
                    item.searchName = '这里显示昵称';
                    item.editPerson = {};
                });
                this.detail = res.Data;
                this.reTitle = this.detail.title;
            }
        },
        //企业动态
        async enterCurrentIndex() {
            let res = await enterCurrentIndex({
                id: this.$route.params.id,
                ...this.params
            });
            if (res.Type == 'Success') {
                res.Data.data.forEach(item => {
                    item.zkDir = false;
                });
                this.list = this.list.concat(res.Data.data);
                this.count = res.Data.count;
            }
        },
        //企业简介
        async enterDesc() {
            let res = await enterDesc({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                this.desc = res.Data.descPc;
            }
        },
        //获取投诉列表
        async getEnterComplaint() {
            let res = await getEnterComplaint({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                this.Complaints = res.Data;
            }
        },
        //获取培训课程
        async enterCourseIndex() {
            let res = await enterCourseIndex();
            if (res.Type == 'Success') {
                this.courseList = res.Data;
            }
        },
        zkFunc(i) {
            this.list[i].zkDir = !this.list[i].zkDir;
            console.log(this.list[i].zkDir);
        },
        more() {
            this.params.index++;
            this.enterCurrentIndex();
        },
        async getLikeEnter() {
            let res = await getLikeEnter();
            if (res.Type == 'Success') {
                this.likeArr = res.Data;
            }
        },
        init() {
            this.enterDetail();
            this.enterDesc();
            this.enterCurrentIndex();
            this.getLikeEnter();
            this.getEnterComplaint();
            this.enterCourseIndex();
            this.GetEnterPostTypes();
            this.GetTodaySign();
        }
    },
    created() {
        this.init();
    },
    watch: {
        $route(to, from) {
            this.init();
        }
    }
};
</script>

<style>
</style>
