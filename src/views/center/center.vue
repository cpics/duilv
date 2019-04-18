<template>
  <div class="g-container center-bg">
    <div class="center-head">
      <div class="center-face">
        <img src alt>
      </div>
      <div class="center-name">苏州海的大姐有限公司</div>
    </div>
    <div class="m-container m-width">
      <div class="center-tab mb-20">
        <dl class="center-tab-inner">
          <router-link tag="dd" :to="item" v-for="(item,i) in centerRouter[0].children" :key="i">
            <span>{{item.meta.title}}</span>
          </router-link>
          <!-- <dd :class="{'active':index==0}" @click="goto('centerIndex',0)">
            <span>账号信息</span>
          </dd>
          <dd :class="{'active':index==1}" @click="goto('myRelease',1)">
            <span>我的发布</span>
          </dd>
          <dd :class="{'active':index==2}" @click="goto('myReply',2)">
            <span>我的回复</span>
          </dd>
          <dd :class="{'active':index==3}" @click="goto('myHistory',3)">
            <span>历史浏览</span>
          </dd>
          <dd :class="{'active':index==4}" @click="goto('myComplaint',4)">
            <span>投诉中心</span>
          </dd>
          <dd :class="{'active':index==5}" @click="goto('feedback',5)">
            <span>意见反馈</span>
          </dd>-->
        </dl>
      </div>
      <div class="center-content">
        <router-view></router-view>
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
import { getUserInfo, userCenter } from '../../api/index';
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'centerIndex',
    data() {
        return {
            index: 0,
            centerRouter: centerRouter
        };
    },
    computed: {
        ...mapState(['userInfo'])
    },
    methods: {
        ...mapMutations(['setUserInfo']),
        goto(name, index) {
            this.$router.push({ name: name });
            this.index = index;
        },
        //获取用户信息
        async getUerInfo() {
            console.log(this.userInfo);
            let res = await getUserInfo({
                token: this.userInfo.token
            });

            if (res.Type == 'Success') {
                this.setUserInfo(res.Data.userInfo);
                this.getUserCenter();
            } else if (!res.Data.isLogin) {
                this.$layer.alert(res.Content, index => {
                    //TODO:删除本地用户信息;
                    
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
        }
    },
    created() {
        console.log(this.centerRouter);
        this.getUerInfo();
        // this.getUserCenter();
    }
};
</script>

<style>
</style>
