<template>
    <div class="g-container center-bg">
        <div class="center-head">
            <div class="center-face">
                <img :src="userInfo.headImage">
            </div>
            <div class="center-name">{{userInfo.nickName}}</div>
        </div>
        <div class="m-container m-width">
            <div class="center-tab mb-20">
                <dl class="center-tab-inner">
                    <!-- <router-link tag="dd"
                                 :userInfo="userInfo"
                                 :to="item"
                                 v-for="(item,i) in centerRouter[0].children"
                                 :key="i">
                        <span>{{item.meta.title}}</span>
                    </router-link> -->
                    <dd :class="{'active':index==0}"
                        @click="goto(0)">
                        <span>账号信息</span>
                    </dd>
                    <dd :class="{'active':index==1}"
                        @click="goto(1)">
                        <span>我的发布</span>
                    </dd>
                    <dd :class="{'active':index==2}"
                        @click="goto(2)">
                        <span>我的回复</span>
                    </dd>
                    <dd :class="{'active':index==3}"
                        @click="goto(3)">
                        <span>历史浏览</span>
                    </dd>
                    <dd :class="{'active':index==4}"
                        @click="goto(4)">
                        <span>投诉中心</span>
                    </dd>
                    <dd :class="{'active':index==5}"
                        @click="goto(5)">
                        <span>意见反馈</span>
                    </dd>
                </dl>
            </div>
            <div class="center-content">
                <div class="center-content-inner show"
                     v-if="index == 0">
                    <div class="cc-inner">
                        <div class="center-account-box">
                            <div class="cc-com-title">
                                <span class="cc-tit">
                                    <i></i>个人资料
                                </span>
                                <!-- <span class="cc-edit-btn">编辑</span> -->
                            </div>
                            <div class="account-form">
                                <div class="account-row">
                                    <label class="account-label">登录账号：</label>
                                    <div class="account-input">
                                        <input type="text"
                                               v-model="uInfo.phone"
                                               placeholder="请输入账号">
                                        <!-- <span class="account-btn">修改手机号</span> -->
                                    </div>
                                </div>
                                <div class="account-row">
                                    <label class="account-label">昵称：</label>
                                    <div class="account-input">
                                        <input type="text"
                                               placeholder="请输入昵称"
                                               v-model="uInfo.nickName">
                                    </div>
                                </div>
                                <div class="account-row">
                                    <label class="account-label">出生地：</label>
                                    <div class="account-input">
                                        <input type="text"
                                               placeholder="请输入出生地"
                                               v-model="uInfo.placeOfBirth">
                                    </div>
                                </div>
                                <div class="account-row">
                                    <label class="account-label">性别：</label>
                                    <div class="account-input">
                                        <span class="account-choose-item"
                                              @click="chooseGender(0)">
                                            <i class="b-radio-icon"
                                               :class="{'active':uInfo.gender == '0'}"></i>
                                            <span>先生</span>
                                        </span>
                                        <span class="account-choose-item"
                                              @click="chooseGender(1)">
                                            <i class="b-radio-icon"
                                               :class="{'active':uInfo.gender == 1}"></i>
                                            <span>女士</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="account-row">
                                    <label class="account-label">生日：</label>
                                    <div class="account-input">
                                        <el-date-picker v-model="uInfo.birthDay"
                                                        type="date"
                                                        placeholder="选择日期">
                                        </el-date-picker>
                                    </div>
                                </div>
                            </div>
                            <div class="account-buttons">
                                <div class="save-btn"
                                     @click="updateUserInfo(1)">保存</div>
                            </div>
                        </div>
                        <div class="center-account-box">
                            <div class="cc-com-title">
                                <span class="cc-tit">
                                    <i></i>头像
                                </span>
                                <!-- <span class="cc-edit-btn">编辑</span> -->
                            </div>
                            <div class="account-form">
                                <div class="account-upload">
                                    <div class="upload-pic">
                                        <img :src="uInfo.headImage"
                                             alt>
                                    </div>
                                    <div class="upload-btn-txt">
                                        <button class="upload-btn">上传头像</button>
                                        <input type="file"
                                               id="imgFile"
                                               name="file"
                                               @change="uploadImg()"
                                               ref="imgInput"
                                               accept="image/png, image/jpeg, image/gif, image/jpg">
                                    </div>
                                    <div class="upload-tips">(支持JPG,PNG格式的图片)</div>
                                </div>
                            </div>
                            <div class="account-buttons">
                                <div class="save-btn"
                                     @click="updateUserInfo(2)">保存</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="center-content-inner show"
                     v-if="index == 1">
                    <div class="cc-inner">
                        <div class="my-publish-list">
                            <ul>
                                <li v-for="(item,i) in cData.publish"
                                    :key="i">
                                    <div class="my-center-infor">
                                        <div class="my-publish-info">
                                            <div class="pub-title">
                                                <b>{{item.title}}</b>
                                                <!--报告  tag-yellow-->
                                                <!--日报 tag-blue-->
                                                <!--图文 tag-green-->
                                                <span class="stroke-tag tag-yellow">{{item.postType}}</span>
                                            </div>
                                            <div class="pub-from">{{item.content}}</div>
                                            <div class="pub-count">
                                                <span class="pub-count-col">
                                                    <i class="n-small-icon time-icon"></i>
                                                    <span>{{item.timeago}}</span>
                                                </span>
                                                <span class="pub-count-col"
                                                      v-if="item.hits">
                                                    <i class="n-small-icon read-icon"></i>
                                                    <span>{{item.hits}}</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="my-publish-handle">
                                            <router-link tag="a"
                                                         class="pub-btn"
                                                         :to="{name:'jxjPostDetail',params:{id:item.id}}">查看</router-link>

                                            <em>|</em>
                                            <a class="pub-btn"
                                               @click="deleteTz(item.id,i)">删除</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="center-content-inner show"
                     v-if="index == 2">
                    <div class="cc-inner">
                        <div class="my-publish-list">
                            <ul>
                                <li v-for="(item,i) in cData.reply"
                                    :key="i">
                                    <div class="my-center-infor">
                                        <div class="my-publish-info">
                                            <div class="pub-title">
                                                <b>{{item.title}}</b>
                                                <!--报告  tag-yellow-->
                                                <!--日报 tag-blue-->
                                                <!--图文 tag-green-->
                                                <span class="stroke-tag tag-yellow">{{item.postType}}</span>
                                            </div>
                                            <div class="pub-from">{{item.content}}</div>
                                            <div class="pub-count">
                                                <span class="pub-count-col">
                                                    <i class="n-small-icon time-icon"></i>
                                                    <span>{{item.timeago}}</span>
                                                </span>
                                                <span class="pub-count-col"
                                                      v-if="item.hits">
                                                    <i class="n-small-icon read-icon"></i>
                                                    <span>{{item.hits}}</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="my-publish-handle">
                                            <router-link tag="a"
                                                         class="pub-btn"
                                                         :to="{name:'jxjPostDetail',params:{id:item.id}}">查看</router-link>
                                            <em>|</em>
                                            <a class="pub-btn"
                                               @click="deleteReply(item.id,i)">删除</a>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="center-content-inner show"
                     v-if="index == 3">
                    <div class="cc-inner">
                        <div class="history-look-list">
                            <ul>
                                <li v-for="(item, i) in cData.history"
                                    :key="i">
                                    <div class="look-pic">
                                        <img :src="item.image"
                                             alt>
                                    </div>
                                    <div class="look-info">
                                        <div class="look-title">
                                            <b>{{item.title}}</b>
                                            <!--报告  tag-yellow-->
                                            <!--日报 tag-blue-->
                                            <!--图文 tag-green-->
                                            <span class="stroke-tag tag-yellow">{{item.postType}}</span>
                                        </div>
                                        <div class="look-txt">{{item.content}}</div>
                                        <div class="pub-count">
                                            <span class="pub-count-col">
                                                <i class="n-small-icon time-icon"></i>
                                                <span>{{item.timeago}}</span>
                                            </span>
                                            <span class="pub-count-col"
                                                  v-if="item.hits">
                                                <i class="n-small-icon read-icon"></i>
                                                <span>{{item.hits}}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="my-publish-handle">
                                        <router-link tag="a"
                                                     class="pub-btn"
                                                     :to="{name:'jxjPostDetail',params:{id:item.id}}">查看</router-link>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <!-- <div class="load-more-btn">
                        <span>加载更多</span>
                        <i class="arrow-stoke-icon active"></i>
                    </div> -->
                </div>
                <div class="center-content-inner show"
                     v-if="index == 4">
                    <div class="cc-inner">
                        <div class="complain-list">
                            <ul>
                                <!--已处理 +disabled-->
                                <li :class="{'disabled':item.state == '已受理'}"
                                    v-for="(item,i) in cData.complaint"
                                    :key="i">
                                    <h4 class="complain-time">{{item.projectName}}</h4>
                                    <!-- <div class="complain-txt">{{item.content}}</div> -->
                                    <div class="complain-comment">
                                        <div class="comment-list has-bg">
                                            <ul>
                                                <li class="no-face">
                                                    <div class="comment-info">
                                                        <div class="comment-name">{{item.nickName}}</div>
                                                        <div class="comment-msg">{{item.content}}</div>
                                                        <div class="comment-time">{{item.createdTime}}</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="my-publish-handle">
                                            <a class="pub-btn">{{item.state}}</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="center-content-inner show"
                     v-if="index == 5">
                    <div class="cc-inner">
                        <div class="cc-com-title">
                            <span class="cc-tit">请提出您的宝贵意见哦</span>
                        </div>
                        <div class="feedback-box">
                            <div class="feedback-textarea">
                                <i class="feed-tree"></i>
                                <textarea v-model="feedBackContent" placeholder="我们有什么可以帮助您的吗？......."></textarea>
                            </div>
                            <div class="feedback-submit">
                                <div class="feedback-btn" @click="feedBack">提交意见</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <router-view></router-view> -->
            </div>
        </div>
    </div>
</template>

<script>
import '../../html/components/center/center.css';

import '../../html/pages/center/account/account.css';

import '../../html/pages/center/publish/publish.css';
import '../../html/components/comments/comments.css';

import '../../html/pages/center/history/history.css';

import '../../html/pages/center/complain/complain.css';
import '../../html/pages/center/feedback/feedback.css';

import { centerRouter } from '../../router.js';
import { getUserInfo, userCenter, updateUserInfo, uploadImage, deleteTz, deleteReply, feedBack } from '../../api/index';
import { mapState, mapMutations } from 'vuex';
import timeago from '../../pubilc/util/timeago.js';

export default {
    name: 'centerIndex',
    data() {
        return {
            feedBackContent:'',
            index: 0,
            uInfo: {
                birthDay: '',
                gender: '',
                headImage: '',
                isBindWX: '',
                nickName: '',
                openid: '',
                phone: '',
                placeOfBirth: '',
                wxName: '',
                id: ''
            },
            rules: {
                birthDay: [
                    { required: true, message: '请输入登录账号!' },
                    { pattern: /^([1]\d{10})$/, message: '请填写正确的手机号!' }
                ],
                nickName: [
                    { required: true, message: '请填写昵称!' }
                ],
                gender: [
                    { required: true, message: '请选择性别!' }
                ],
                placeOfBirth: [
                    { required: true, message: '请填写出生地!' }
                ],
                birthDay: [
                    { required: true, message: '请选择出生日期' }
                ]
            },
            imgRule: {
                headImage: [
                    { required: true, message: '请填写昵称!' }
                ]
            },
            cData: {
                complaint: [],
                history: [],
                publish: [],
                reply: []
            },
            // centerRouter: centerRouter
        };
    },
    computed: {
        ...mapState(['userInfo'])
    },
    methods: {
        ...mapMutations(['setUserInfo', 'delUserInfo']),
        goto(index) {
            this.index = index;
        },
        async deleteTz(id, index) {
            let res = await deleteTz({
                id: id
            });
            if (res.Type == 'Success') {
                this.cData.publish.splice(index, 1);
                this.$layer.alert(res.Content);
            } else {
                this.$layer.alert(res.Content);
            }
        },
        async feedBack(){
            if(this.feedBackContent.length == 0){
                this.$layer.alert('请输入您的宝贵意见');
            }
            let res = await feedBack({
                content:this.feedBackContent
            });
            if(res.Type == 'Success'){
                this.$layer.alert(res.Content);
            }else{
                this.$layer.alert(res.Content);
            }
        },
        async deleteReply(id, index) {
            let res = await deleteReply({
                id: id
            });
            if (res.Type == 'Success') {
                this.cData.reply.splice(index, 1);
                this.$layer.alert(res.Content);
            } else {
                this.$layer.alert(res.Content);
            }
        },
        chooseGender(gender) {
            this.uInfo.gender = gender;
        },
        //获取用户信息
        async getUerInfo() {
            // console.log(this.userInfo);
            let res = await getUserInfo({
                token: this.userInfo.token
            });

            if (res.Type == 'Success') {
                this.getUserCenter();
                if (res.Data.userInfo.gender == 2) {
                    res.Data.userInfo.gender = '';
                }
                this.setUserInfo(res.Data.userInfo);
                this.uInfo.birthDay = res.Data.userInfo.birthDay;
                this.uInfo.gender = res.Data.userInfo.gender;
                this.uInfo.headImage = res.Data.userInfo.headImage;
                this.uInfo.isBindWX = res.Data.userInfo.isBindWX;
                this.uInfo.nickName = res.Data.userInfo.nickName;
                this.uInfo.openid = res.Data.userInfo.openid;
                this.uInfo.phone = res.Data.userInfo.phone;
                this.uInfo.placeOfBirth = res.Data.userInfo.placeOfBirth;
                this.uInfo.id = res.Data.userInfo.id;
                this.uInfo.wxName = res.Data.userInfo.wxName;
                this.uInfo.token = res.Data.userInfo.token;
                // console.log()
                // this.uInfo = res.Data.userInfo;
                // console.log(this.userInfo);

            } else if (!res.Data.isLogin) {
                this.$layer.alert(res.Content, index => {
                    //TODO:删除本地用户信息;
                    this.delUserInfo();
                    this.$layer.close(index);
                    this.$router.push({ name: 'home' });
                });
            }
        },
        //获取个人中心数据
        async getUserCenter() {
            let res = await userCenter({
                token: this.userInfo.token
            });

            if (res.Type == 'Success') {
                //timeago
                res.Data.publish.forEach(item => {
                    item.timeago = timeago(new Date(item.createdTime));
                })
                res.Data.history.forEach(item => {
                    item.timeago = timeago(new Date(item.createdTime));
                })
                res.Data.reply.forEach(item => {
                    item.timeago = timeago(new Date(item.createdTime));
                })
                this.cData.complaint = res.Data.complaint;
                this.cData.history = res.Data.history;
                this.cData.publish = res.Data.publish;
                this.cData.reply = res.Data.reply;
            }
        },
        async updateUserInfo(type) {//1更新个人资料 ，2是更新头像
            let validator;
            if (type == 1) {
                validator = new this.$validator(this.rules);
            } else {
                validator = new this.$validator(this.imgRule);
            }

            let model = this.uInfo;
            validator.validate(model, async (errors, fields) => {
                if (!errors) {
                    let pm;
                    if (type == 1) {
                        pm = {
                            id: this.uInfo.id,
                            nickName: this.uInfo.nickName,
                            birthDay: this.uInfo.birthDay,
                            placeOfBirth: this.uInfo.placeOfBirth,
                            gender: this.uInfo.gender
                        }
                    } else if (type == 2) {
                        pm = {
                            id: this.uInfo.id,
                            headImage: this.uInfo.headImage
                        }
                    }
                    let res = await updateUserInfo(pm);
                    if (res.Type == 'Success') {
                        this.$layer.alert(res.Content);
                    } else {
                        this.$layer.alert(res.Content);
                    }
                } else {
                    this.$layer.alert(errors[0].message);

                }
            });
        },
        async uploadImg() {
            let file = this.$refs.imgInput.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            let that = this;
            reader.onload = async function (e) {
                let res = await uploadImage({
                    file: file
                });
                if (res.Type == 'Success') {
                    that.uInfo.headImage = res.Data;
                }
            };
        },
    },
    created() {
        if(!this.userInfo){
            this.$router.push({name:'home'});
        }
        this.getUerInfo();
    }
};
</script>

<style>
</style>
