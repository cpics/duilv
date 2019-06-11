<template>
    <div>
        <i @click="like" class="like-icon"></i>
        <span>{{likeNum}}</span>
    </div>
</template>

<script>
import like from '../../pubilc/util/like';
export default {
    name: 'h-like',
    props: ['likeNum', 'id'],
    methods: {
        like() {
            like(this.id, () => {});
        }
    }
};
</script>

<style>
</style>
