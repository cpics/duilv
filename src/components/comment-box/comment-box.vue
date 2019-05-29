<template>
    <div class="comment-box">
        <div class="comment-title">
            全部评论
        </div>
        <!--暂无数据 显示 +show-->
        <div class="m-no-data show"
             v-if="commentList && commentList.length == 0">
            <div class="no-data-icon"></div>
            <div class="no-data-prompt">还没有评论，快点来发表吧</div>
        </div>
        <div class="comment-list"
             v-if="commentList && commentList.length > 0">
            <ul>
                <li v-for="(item,i) in commentList"
                    :key="i">
                    <div class="level-comment"
                         v-if="!item.isChild">
                        <div class="comment-face">
                            <img :src="item.headImage"
                                 alt="">
                        </div>
                        <div class="comment-info">
                            <div class="comment-name">
                                <span>{{item.nickName}}</span>
                                <span class="name-tipper">
                                    <span class="comment-time">{{item.timeAgo}}</span>
                                    <em class="comment-dot"
                                        v-if="replyBtnDir">·</em>
                                    <span class="report-btn"
                                          v-if="replyBtnDir">举报</span>
                                </span>
                            </div>
                            <div class="comment-msg">
                                <div>{{item.content}}</div>
                                <div class="reply-comment-row"
                                     v-if="replyBtnDir">
                                    <span class="reply-comment-btn"
                                          @click="showReplayFunc(i)">
                                        <i class="n-small-icon comment-icon"></i>
                                        <span>回复</span>
                                    </span>
                                    <!--回复区  显示 +show-->
                                    <slot v-if="item.showReplay"
                                          :rowdata="item"></slot>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="level-comment"
                         v-if="item.isChild">
                        <div class="comment-info">
                            <div class="comment-msg">
                                <div>
                                    <span class="c-dark-blue">{{item.nickName}}</span> 回复
                                    <span class="c-dark-blue">{{item.ParentNickName}}</span> ：{{item.content}}
                                </div>
                                <!-- <div class="reply-comment-row">
                                    <span class="reply-comment-btn">
                                        <i class="n-small-icon comment-icon"></i>
                                        <span>回复</span>
                                    </span>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'commentBox',
    props: {
        commentList: Array,
        replyBtnDir: Boolean
    },
    methods: {
        showReplayFunc(index) {
            console.log(1);
            this.$emit('showReplayFunc', index);
        }
    }
}
</script>

<style>
</style>
