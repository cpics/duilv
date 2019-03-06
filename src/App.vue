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
        <footer-component/>
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

import { footer } from './api/index';
export default {
    components: {
        headerWrapper,
        logo,
        headerMenu,
        headerAbout,
        footerComponent
    },
    methods: {
        async getFooter() {
            let res = await footer();
            console.log(res);
        }
    },
    created() {
        this.getFooter();
    }
};
</script>

<style></style>
