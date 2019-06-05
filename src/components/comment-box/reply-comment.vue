<template>
    <div class="reply-area show">
        <div class="reply-textarea">
            <textarea placeholder="回复"
                      v-model="content"></textarea>
        </div>
        <div class="comment-publish-btn">
            <span class="publish-btn"
                  @click="jxjAddReplis()">发送</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'replay-comment',
    props: ['replyId'],
    data() {
        return {
            content: ''
        }
    },
    methods: {
        jxjAddReplis() {
            // console.log(this.replyId);
            // return;
            // debugger;
            if (this.content.length == 0) {
                this.$layer.alert('请输入评论内容');
                return false;
            }

            this.$emit('jxjAddReplis', this.content, this.replyId);
        }
    }
}
</script>

<style>
</style>
