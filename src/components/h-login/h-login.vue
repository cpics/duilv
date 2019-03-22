<template>
  <div v-if="showDir">
    <div class="shadow-fixed" :class="{'show':type==1}">
      <div class="mask" @click="close()"></div>
      <div class="bomb-mv-box">
        <!--<div class="bomb-close-icon"></div>-->
        <div class="phone-login-box">
          <h2 class="p-login-hd">登录</h2>
          <div class="m-form-group">
            <div class="m-input-group">
              <div class="m-input">
                <i class="input-icon m-phone-icon"></i>
                <input type="text" v-model="form.phone" placeholder="请输入手机号" maxlength="11">
              </div>
            </div>
            <!-- <div class="m-input-group has-verify">
              <div class="m-input">
                <i class="input-icon m-pic-icon"></i>
                <input type="text" placeholder="请输入图片验证码">
              </div>
              <div class="m-verify">
                <div class="pic-verify">
                  <img @click="getPic" :src="verifyImgUrl" alt>
                </div>
              </div>
            </div>-->
            <div class="m-input-group has-verify">
              <div class="m-input">
                <i class="input-icon m-msg-icon"></i>
                <input type="text" v-model="form.verifyCode" placeholder="请输入验证码" maxlength="6">
              </div>
              <div class="m-verify">
                <!---->
                <div class="msg-verify" @click="getVerifyCode" v-if="verifyDir">获取验证码</div>
                <!--<div class="msg-verify">重新发送</div>-->
                <div class="msg-verify disabled" v-if="!verifyDir">{{mint}}S</div>
              </div>
            </div>
          </div>
          <div class="m-form-group m-form-btns">
            <!-- <div class="dm-btn dm-btn-info">返回</div> -->
            <div class="dm-btn dm-btn-default" @click="loginSubmit">无需注册，立即登录</div>
          </div>
          <!-- <div class="m-wechat-enter">
            <span class="wechat-btn">
              微信登录
              <i class="u-wechat-icon"></i>
            </span>
          </div>-->
        </div>
      </div>
    </div>
    <!--微信登录 显示 +show-->
    <div class="shadow-fixed" :class="{'show':type==2}">
      <div class="mask"></div>
      <div class="bomb-mv-box">
        <div class="bomb-close-icon"></div>
        <div class="wechat-login-box">
          <h2 class="wechat-tit">微信登录</h2>
          <div class="wechat-scan-pic">
            <img :src="require('../../html/components/login/images/code.png')" alt>
          </div>
          <div class="wechat-scan-txt">请使用微信扫描二维码登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../html/components/popCommon/popCommon.scss';
import '../../html/components/login/login.scss';
import {
    getPicVFL,
    checkPicVFL,
    getVerifyForSms,
    login
} from '../../api/index';

// import { mapMutations,mapState } from 'vuex';
export default {
    name: 'h-login',
    data() {
        return {
            type: 1, //1代表密码登录，2代表微信登录
            showDir: false,
            verifyImgUrl: '',
            verifyDir: true, //是否可以发短信验证码,
            mint: 60,
            form: {
                phone: '',
                verifyCode: ''
            },
            loginRule: {
                phone: [
                    { required: true, message: '请输入手机号!' },
                    { pattern: /^([1]\d{10})$/, message: '请填写正确的手机号!' }
                ],
                verifyCode: [
                    { required: true, message: '请输入验证码!' },
                    { min: 4, message: '验证码至少为6位' }
                ]
            },
            verifyCodeRule: {
                phone: [
                    { required: true, message: '请输入手机号!' },
                    { pattern: /^([1]\d{10})$/, message: '请填写正确的手机号!' }
                ]
            }
        };
    },
    methods: {
        close() {
            this.showDir = false;
        },
        show(type) {
            this.showDir = true;
            if (type) this.type = type;
        },
        login() {
            this.$emit('login');
        },
        //图形验证码
        async getPic() {
            this.verifyImgUrl = `//www.iduilv.com/Common/VerifyCode/?t=${new Date()}`;
        },
        //获取手机验证码
        async getVerifyCode() {
            let validator = new this.$validator(this.verifyCodeRule);
            let model = this.form;
            validator.validate(model, async (errors, fields) => {
                if (!errors) {
                    let res = await getVerifyForSms({
                        phone: this.form.phone,
                        verifyToken: ''
                    });
                    if (res.Type == 'Success') {
                        this.$layer.alert(res.Content);
                        this.verifyDir = false;
                        this.mint = 60;
                        var t = setInterval(() => {
                            this.mint--;
                            if (this.mint == 0) {
                                clearInterval(t);
                                this.mint = 60;
                                this.verifyDir = true;
                            }
                        }, 1000);
                    } else {
                        this.$layer.alert(res.Content);
                    }
                    // this.$layer.alert(errors[0].message);
                } else {
                    this.$layer.alert(errors[0].message);
                }
            });
        },
        async loginSubmit() {
            let validator = new this.$validator(this.loginRule);
            let model = this.form;
            validator.validate(model, async (errors, fields) => {
                if (!errors) {
                    let res = await login(this.form);
                    if (res.Type == 'Success') {
                        this.showDir = false;
                        this.$emit('login', res.Data);
                    } else {
                        this.$layer.alert(res.Content);
                    }
                    // this.$layer.alert(errors[0].message);
                } else {
                    this.$layer.alert(errors[0].message);
                }
            });
        }
    },
    created() {
        // this.$store.commit('add');
        // this.getPic();
    }
    // watch: {
    //     showDir(newValue) {
    //         if (newValue == true) {
    //             this.getPic();
    //         }
    //     }
    // }
};
</script>

<style>
</style>
