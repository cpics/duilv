<template>
  <div v-show="showDir">
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
                <input type="text" placeholder="请输入手机号">
              </div>
            </div>
            <div class="m-input-group has-verify">
              <div class="m-input">
                <i class="input-icon m-pic-icon"></i>
                <input type="text" placeholder="请输入图片验证码">
              </div>
              <div class="m-verify">
                <div class="pic-verify">
                  <img :src="require('../../html/components/login/images/hd.png')" alt>
                </div>
              </div>
            </div>
            <div class="m-input-group has-verify">
              <div class="m-input">
                <i class="input-icon m-msg-icon"></i>
                <input type="text" placeholder="请输入验证码">
              </div>
              <div class="m-verify">
                <!---->
                <div class="msg-verify">获取验证码</div>
                <!--<div class="msg-verify">重新发送</div>-->
                <!--<div class="msg-verify disabled">60s</div>-->
              </div>
            </div>
          </div>
          <div class="m-form-group m-form-btns">
            <!-- <div class="dm-btn dm-btn-info">返回</div> -->
            <div class="dm-btn dm-btn-default" @click="login">无需注册，立即登录</div>
          </div>
          <!-- <div class="m-wechat-enter">
            <span class="wechat-btn">
              微信登录
              <i class="u-wechat-icon"></i>
            </span>
          </div> -->
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
export default {
    name: 'h-login',
    data() {
        return {
            type: 1, //1代表密码登录，2代表微信登录
            showDir: false,
            form:{
              
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
        login(){
          
        }
    }
};
</script>

<style>
</style>
