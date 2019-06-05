<template>
    <div class="ad-item">
        <a :href="info.OutLink" target="_blank">
            <img :src="info.PicPath" alt>
        </a>
    </div>
</template>

<script>
export default {
    name: 'ad-item',
    props:{
        info:Object
    }
};
</script>

<style>
</style>
