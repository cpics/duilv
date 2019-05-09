<template>

    <!--回到顶部+评论-->
    <div class="m-fix-bar">
        <!--选中 +active-->
        <div class="u-fix-item"
             @click="like"
             :class="{'active':isLike}">
            <i class="fix-big-icon like-b-icon"></i>
            <p>点赞</p>
        </div>
        <div class="u-fix-item">
            <i class="fix-big-icon comment-b-icon"></i>
            <p>评论</p>
        </div>
        <div class="u-fix-item scroll-top"
             @click="toTop">
            <i class="scroll-top-icon"></i>
        </div>
    </div>
</template>

<script>
import { like } from '../../api';
export default {
    name: 'toTop',
    props: ['isLike', 'id'],
    methods: {
        async like() {

            let res = await like({
                id: this.id
            });
            if (res.Type == 'Success') {
                this.isLike = true;
                this.$layer.alert(res.Content);
            } else {
                this.$layer.alert(res.Content);
            }
        },
        toTop() {
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<style>
</style>
