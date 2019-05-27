<template>
    <div class="ad-item">
        <a :href="info.outLink" target="_blank">
            <img :src="info.picPath" alt>
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
