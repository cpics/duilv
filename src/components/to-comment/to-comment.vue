<template>
    <div class="">
        <!--<div class="comment-title">-->
        <!--发表评论-->
        <!--</div>-->
        <div class="comment-publish">
            <div class="publish-face">
                <img src=""
                     alt="">
            </div>
            <div class="comment-textarea">
                <textarea v-model="content"
                          placeholder="我有话说..."></textarea>
            </div>
        </div>
        <div class="comment-publish-btn">
            <span class="publish-btn"
                  @click="jxjAddReplis()">发表评论</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'toComment',
    data() {
        return {
            content: ''
        }
    },
    methods: {
        jxjAddReplis() {
            // debugger;
            if (this.content.length == 0) {
                this.$layer.alert('请输入评论内容');
                return false;
            }
            this.$emit('jxjAddReplis', this.content);
        }
    }
}
</script>

<style>
</style>
