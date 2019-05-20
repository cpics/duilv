<template>
    <div class="g-container">
        <!--图片banner-->
        <div class="m-norm-banner">
            <div class="pic-banner">
                <img :src="info.picPath">
            </div>
        </div>
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <router-link tag="a"
                             class="c-crumbs"
                             :to="{name:'default'}">首页</router-link>
                <span class="c-sep">&gt;</span>
                <router-link tag="a"
                             class="c-crumbs"
                             :to="{name:'newsIndex'}">绿建要闻</router-link>
                <span class="c-sep">&gt;</span>
                <span class="c-current">{{info.title}}</span>
            </div>
            <!--绿建要闻-详情-->
            <div class="m-structure-content">
                <div class="m-structure-information">
                    <div class="news-d-article">
                        <h2>{{info.title}}</h2>
                        <div class="u-news-handle">
                            <div class="un-left">
                                <span class="un-col">
                                    <i class="n-small-icon eye-icon"></i>
                                    {{info.hits}}
                                </span>
                                <span class="un-col">
                                    <i class="n-small-icon edit-icon"></i>
                                    {{info.forumName}}
                                </span>
                                <span class="un-col">
                                    <i class="n-small-icon time-icon"></i>
                                    {{info.timeago}}
                                </span>
                            </div>
                        </div>
                        <div class="news-article" v-html="info.content"></div>
                    </div>
                    <div class="comment-box">
                        <div class="comment-title">发表评论</div>
                        <div class="comment-publish">
                            <div class="publish-face">
                                <img src alt>
                            </div>
                            <div class="comment-textarea">
                                <textarea v-model="repContent" placeholder="我有话说..."></textarea>
                            </div>
                        </div>
                        <div class="comment-publish-btn">
                            <span class="publish-btn" @click="addReplis()">发表评论</span>
                        </div>
                    </div>
                    <div class="comment-box pt-small">
                        <div class="comment-title">最新评论</div>
                        <div class="comment-list">
                            <ul>
                                <li v-for="(item,index) in info.reps" :key="index">
                                    <div class="comment-face">
                                        <img :src="item.headImage">
                                    </div>
                                    <div class="comment-info">
                                        <div class="comment-name">
                                            <span>{{item.nickName}}</span>
                                            <!-- <span class="name-tipper">
                        <span class="comment-time">10分钟前</span>
                        <em class="comment-dot">·</em>
                        <span class="report-btn">举报</span>
                      </span>-->
                                        </div>
                                        <div class="comment-msg" v-html="item.content"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="m-structure-quick">
                    <div class="structure-box">
                        <div class="common-tit-h2">
                            <b>往期推荐</b>
                        </div>
                        <div class="recommend-list">
                            <router-link
                                class="recommend-item"
                                tag="a"
                                v-for="(item,index) in info.hotNews"
                                :key="index"
                                :to="{name:'newsDdetail',params:{id:item.id}}"
                            >{{item.title}}</router-link>
                        </div>
                    </div>
                    <div class="scan-code-quick">
                        <div class="code-quick-pic">
                            <img src="../../../../html/components/footer/images/code.png" alt>
                        </div>
                        <div class="code-quick-txt">
                            扫一扫”即可将
                            <br>网页分享至朋友圈
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../../../html/components/crumbs/crumbs.scss';
import '../../../../html/pages/news/news/news.scss';
import '../../../../html/components/banner/banner.scss';
import '../../../../html/components/structure/structure.scss';
import '../../../../html/components/comments/comments.scss';
import '../../../../html/components/article/article.scss';

import { getNewsDetail, addReplis, getReplies } from '../../../../api/index';
import timeago from '../../../../pubilc/util/timeago';
export default {
    name: 'newsDetail',
    data() {
        return {
            info: {},
            repContent: ''
        };
    },
    methods: {
        async getData() {
            let res = await getNewsDetail({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                res.Data.timeago = timeago(new Date(res.Data.createdTime));
                this.info = res.Data;
            }
        },
        //获取最新评论
        async getReplies() {
            let res = await getReplies({
                id: this.$route.params.id
            });
            if (res.Type == 'Success') {
                this.info.reps = res.Data;
                console.log(this.info.reps);
            }
        },
        //发表评论
        async addReplis(repId) {
            if (this.repContent.lenth == 0) {
                this.$layer.alert('请输入评论内容');
                return false;
            }
            let params = {
                id: this.$route.params.id,
                content: this.repContent
            };
            if (repId) {
                params.repId = repId;
            } else {
                params.repId = '';
            }
            let res = await addReplis(params);

            if (res.Type == 'Success') {
                // debugger;
                this.repContent = '';
                this.$layer.alert(res.Content);
                this.getReplies();
                //获取最新的评论列表
            } else {
                this.$layer.alert(res.Conent);
            }
        }
    },
    created() {
        this.getData();
    },
    watch: {
        $route(to, from) {
            this.getData();
        }
    }
};
</script>

<style>
</style>
