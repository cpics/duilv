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
          <dd :class="{'active':index==0}" @click="goto('centerIndex',0)">
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
          </dd>
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

// import { centerRouter } from '../../router.js';

export default {
    name: 'centerIndex',
    data() {
        return {
            index: 0
            // centerRouter: centerRouter
        };
    },
    methods: {
        goto(name, index) {
            this.$router.push({ name: name });
            this.index = index;
        }
    },
    created() {}
};
</script>

<style>
</style>
