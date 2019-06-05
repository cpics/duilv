<template>
    <span class="share-wechat-btn">
        分享：
        <i class="u-wechat-icon"></i>
        <span class="wechat-qr-code">
            <em></em>
            <qrcode-vue :value="localHref"
                        :size="116"
                        level="H"></qrcode-vue>
        </span>
    </span>
</template>

<script>
import QrcodeVue from 'qrcode.vue';

export default {
    name: 'hQrcode',
    data() {
        return {
            localHref: location.href,
        }
    },
    components:{
        QrcodeVue
    }
}
</script>

<style>
</style>
