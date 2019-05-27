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
        <div class="u-fix-item"
             @click="toComment">
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
                if (res.Content.indexOf('点赞') > -1) {
                    this.$emit('likeFunc', 1)
                } else if (res.Content.indexOf('取消') > -1) {
                    this.$emit('likeFunc', 2)
                }

                // this.isLike = true;
                this.$layer.alert(res.Content);
            } else {
                this.$layer.alert(res.Content);
            }
        },
        toTop() {
            document.documentElement.scrollTop = 0;
        },
        toComment() {
            document.documentElement.scrollTop = document.querySelector('#toCommentBox').offsetTop;
            // console.log();
        }
    }
}
</script>

<style>
</style>
