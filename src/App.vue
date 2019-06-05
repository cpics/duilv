<template>
    <div id="app">
        <div class="mod-wrapper">
            <div class="mod-wrap">
                <header-wrapper>
                    <logo/>
                    <header-menu/>
                    <header-about/>
                </header-wrapper>
                <router-view/>
                <footer-component :footData="footData" />
            </div>
        </div>
    </div>
</template>

<script>
import './html/components/common/reset.scss';
import './html/components/common/common.scss';
import './html/components/footer/footer.scss';

import headerWrapper from './components/header-wrapper/header-wrapper';
import logo from './components/logo/logo';
import headerMenu from './components/header-menu/header-menu';
import headerAbout from './components/header-about/header-about';
import footerComponent from './components/footer/footer';

import { mapMutations, mapState } from 'vuex';

import { getUserInfo } from './api/index.js';

import { footer } from './api/index';
export default {
    components: {
        headerWrapper,
        logo,
        headerMenu,
        headerAbout,
        footerComponent
    },
    data() {
        return {
            footData: []
        };
    },
    computed: {
        ...mapState(['userInfo'])
    },
    methods: {
        ...mapMutations(['setUserInfo']),
        async getFooter() {
            let res = await footer();
            if (res.Type == 'Success') {
                this.footData = res.Data;
            }
            // console.log(res);
        },
        async getUserInfo() {
            if (this.userInfo == null) {
                let res = await getUserInfo();
                if (res.Type == 'Success') {
                    this.setUserInfo(res.Data.userInfo);
                }
            }
        }
    },
    created() {
        this.getFooter();
        // debugger;
        this.setUserInfo();
        this.getUserInfo();
    }
};
</script>

<style></style>
