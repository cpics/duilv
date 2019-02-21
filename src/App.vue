<template>
  <div id="app">
    <div class="mod-wrapper">
      <div class="mod-wrap">
        <header-wrapper>
          <logo/>
          <headerMenu />
        </header-wrapper>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import './html/components/common/reset.scss';
import './html/components/common/common.scss';

import headerWrapper from './components/header-wrapper/header-wrapper';
import logo from './components/logo/logo';
import headerMenu from './components/header-menu/header-menu';
export default {
    components: {
        headerWrapper,
        logo,
        headerMenu
    }
};
</script>

<style></style>
