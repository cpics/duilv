<template>
  <div class="top-about">
    <a href>联系我们</a>
    <span class="is-login">
      <a href="javascript:;" @click="showLogin">登录</a>
      <!-- <span class="login-top-face">
        <img alt>
      </span>-->
    </span>
  </div>
</template>

<script>
export default {
    name: 'headerAbout',
    methods: {
        showLogin() {
            console.log(1);
            this.$login.show(1, function() {});
        }
    }
};
</script>

<style>
</style>
