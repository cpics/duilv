<template>
    <div class="top-about">
        <!-- <a href>联系我们</a> -->
        <span class="is-login">
            <a href="javascript:;"
               v-if="!isLogined"
               @click="showLogin">登录</a>
            <router-link v-if="isLogined"
                         tag="span"
                         class="login-top-face"
                         :to="{name:'center'}">
                <!-- <span v-if="isLogined" class="login-top-face"> -->
                <img :src="userInfo.headImage">
                <!-- </span> -->
            </router-link>
        </span>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'headerAbout',
    data() {
        return {
            // isLogined: false
        };
    },
    computed: {
        ...mapState(['userInfo']),
        isLogined() {
            if (this.userInfo != null) {
                return 1;
            } else {
                return 0;
            }
        }
    },
    methods: {
        ...mapMutations(['setUserInfo']),
        showLogin() {
            console.log(1);
            this.$login.show(1, userInfo => {
                this.setUserInfo(userInfo);
            });
        }
    }
};
</script>

<style>
</style>
