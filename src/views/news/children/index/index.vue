
<template>
    <div class="g-container">
        <!--图片banner-->
        <div class="m-norm-banner">
            <div class="pic-banner">
                <img :src="picPath"
                     alt>
            </div>
        </div>
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <router-link tag="a"
                             class="c-crumbs"
                             :to="{name:'default'}">首页</router-link>
                <span class="c-sep">&gt;</span>
                <span class="c-current">绿建要闻</span>
            </div>
            <!--绿建要闻-->
            <div class="m-structure-content">
                <div class="m-structure-information">
                    <div class="common-title">绿建要闻</div>
                    <div class="m-news-list">
                        <ul>
                            <li v-for="(item,index) in news"
                                :key="index">
                                <router-link tag="a"
                                             target="_blank"
                                             :to="{name:'newsDdetail',params:{id:item.id}}">
                                    <div class="u-news-pic">
                                        <img :src="item.picPath">
                                    </div>
                                    <div class="u-news-info">
                                        <div class="u-news-hd">
                                            <div class="u-news-tit">{{item.title}}</div>
                                            <div class="u-news-txt"
                                                 v-html="item.content"></div>
                                        </div>
                                        <div class="u-news-handle">
                                            <div class="un-left">
                                                <span class="un-col">
                                                    <i class="n-small-icon comment-icon"></i>
                                                    {{item.repNum}}
                                                </span>
                                                <span class="un-col">
                                                    <i class="n-small-icon eye-icon"></i>
                                                    {{item.hits}}
                                                </span>
                                            </div>
                                            <div class="un-right">
                                                <span class="un-col">
                                                    <i class="n-small-icon edit-icon"></i>
                                                    {{item.forumName}}
                                                </span>
                                                <span class="un-col">
                                                    <i class="n-small-icon time-icon"></i>
                                                    {{item.timeago}}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="m-structure-quick">
                    <div class="structure-box">
                        <div class="common-tit-h2">
                            <b>往期推荐</b>
                        </div>
                        <div class="recommend-list">
                            <ul>
                                <li v-for="(item,index) in oldNews"
                                    :key="index">
                                    <router-link class="recommend-item"
                                                 target="_blank"
                                                 tag="a"
                                                 :to="{name:'newsDdetail',params:{id:item.id}}">{{item.title}}</router-link>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div class="scan-code-quick">
                        <div class="code-quick-pic">
                            <qrcode-vue :value="localHref"
                                        :size="140"
                                        level="H"></qrcode-vue>
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
import '../../../../html/components/banner/banner.scss';
import '../../../../html/pages/news/news/news.scss';
import '../../../../html/components/structure/structure.scss';

import { getNewsIndex } from '../../../../api/index';
import timeago from '../../../../pubilc/util/timeago';

import QrcodeVue from 'qrcode.vue';

export default {
    name: 'news',
    components: {
        QrcodeVue
    },
    data() {
        return {
            news: [],
            picPath: '',
            oldNews: [],
            localHref: location.href
        };
    },
    methods: {
        async getData() {
            let res = await getNewsIndex();
            if (res.Type == 'Success') {
                res.Data.news.forEach(item => {
                    item.timeago = timeago(new Date(item.createdTime));
                });
                this.picPath = res.Data.picPath;
                this.news = res.Data.news;
                this.oldNews = res.Data.oldnew;
            }
        }
    },
    created() {
        this.getData();
    }
};
</script>

<style>
</style>
