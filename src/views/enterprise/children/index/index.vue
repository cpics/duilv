<template>
    <div class="g-container">
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <a class="c-crumbs"
                   href>首页</a>
                <span class="c-sep">&gt;</span>
                <span class="c-current">行业圈</span>
            </div>
            <!--行业圈-->
            <div class="m-structure-content">
                <div class="m-structure-information">
                    <div class="m-prise-content">
                        <div class="e-prise-box"
                             v-for="(item,index) in list"
                             :key="index">
                            <div>
                                <div class="prise-hd"
                                     @click="gotoDetail(item.enterId)">
                                    <div class="prise-face">
                                        <img :src="item.icon">
                                    </div>
                                    <div class="prise-hd-info">
                                        <div class="prise-hd-name">{{item.enterName}}</div>
                                        <!-- <div class="prise-time">12小时前</div> -->
                                    </div>
                                </div>
                                <div class="prise-article">
                                    <div class="prise-art-name">
                                        <b>{{item.title}}</b>
                                        <span class="art-tips">{{item.type}}</span>
                                    </div>
                                    <!-- <div class="prise-art-txt" v-html="item.content"></div> -->
                                    <div class="view-more-prise"
                                         :class="{'active':!item.zkDir}">
                                        <div class="prise-art-txt">
                                            <div class="txt-div"
                                                 v-html="item.content"
                                                 style="height:100%;">

                                            </div>
                                        </div>
                                        <div class="view-more-txt unfold"
                                             v-if="!item.zkDir && item.isNeedMoreBtn"
                                             @click.stop.prevent="zkFunc(index)">
                                            查看更多
                                            <i></i>
                                        </div>
                                        <div class="view-more-txt fewer"
                                             v-if="item.zkDir && item.isNeedMoreBtn"
                                             @click.stop.prevent="zkFunc(index)">
                                            收起
                                            <i></i>
                                        </div>
                                    </div>
                                    <div class="cp-column hover-scale big-pic">
                                        <div class="cp-item"
                                             v-for="(img,i) in item.images"
                                             :key="i">
                                            <img @click="openPopImgList(item.images,i)"
                                                 :src="img">
                                        </div>
                                    </div>
                                    <div class="u-news-handle">
                                        <div class="un-left"
                                             v-if="item.addr">
                                            <span class="un-col c-grey-9">
                                                <i class="address-icon"></i>
                                                {{item.addr}}
                                            </span>
                                        </div>
                                        <div class="un-right">
                                            <span class="un-col">
                                                <!--选中 +active-->
                                                <i class="like-icon"
                                                   :class="{'active':item.isLike}"></i>
                                                {{item.likes}}
                                            </span>
                                            <span class="un-col">
                                                <i class="n-small-icon comment-icon"></i>
                                                {{item.repNum}}

                                            </span>
                                        </div>
                                    </div>
                                    <div class="comment-box"
                                         v-if="item.reps.length>0">
                                        <em class="c-arrow-up"></em>
                                        <div class="prise-comment">
                                            <div class="comment-list">
                                                <ul>
                                                    <li v-for="(rep,r) in item.reps"
                                                        :key="r">
                                                        <div class="comment-face">
                                                            <img src
                                                                 alt>
                                                        </div>
                                                        <div class="comment-info">
                                                            <div class="comment-name">{{rep.nickName}}</div>
                                                            <div class="comment-msg">{{rep.content}}</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="news-more"
                             v-if="list.length<count"
                             @click="more()">加载更多</div>
                    </div>
                </div>
                <div class="m-structure-quick">
                    <!-- <div class="structure-btn">写动态</div> -->
                    <div class="structure-box"
                         v-if="likeArr.length >0 ">
                        <div class="common-tit-h2">
                            <b>猜你想看</b>
                            <!-- <a href class="more-tit-btn">全部&gt;</a> -->
                        </div>
                        <div class="guess-like">
                            <router-link tag="a"
                                         target="_blank"
                                         class="guess-item"
                                         v-for="(l,i) in likeArr"
                                         :key="i"
                                         :to="{name:'enterDetail',params:{id:l.id}}">
                                <div class="guess-face">
                                    <img :src="l.icon">
                                </div>
                                <div class="guess-info">{{l.title}}</div>
                            </router-link>
                        </div>
                    </div>
                    <div class="structure-box">
                        <div class="common-tit-h2">
                            <b>绿建要闻</b>
                        </div>
                        <div class="recommend-list">
                            <ul>
                                <li v-for="(item,i) in news"
                                    :key="i"
                                    v-if="i<10">

                                    <router-link target="_blank"
                                                 :to="{name:'newsDdetail',params:{id:item.id}}"
                                                 tag="a"
                                                 class="recommend-item">{{item.title}}</router-link>
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
        <div class="shadow-fixed show"
             v-if="currentImgShow">
            <div class="mask"></div>
            <div class="bomb-com-box full-bomb">
                <div class="bomb-small-close"
                     @click="closePopimglist"></div>
                <div class="qe-view-detail">
                    <div class="cp-column cp-bomb-full cp-swiper">

                        <swiper :options="swiperOption">

                            <swiper-slide v-for="(item,index) in currentImgList"
                                          :key="index">
                                <img :src="item">
                            </swiper-slide>
                            <div class="swiper-button-prev"
                                 slot="button-prev"></div>
                            <div class="swiper-button-next"
                                 slot="button-next"></div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import '../../../../html/components/crumbs/crumbs.scss';
import '../../../../html/components/structure/structure.scss';
import '../../../../html/components/enterprise/enterprise.scss';
import '../../../../html/components/picture/picture.scss';
import '../../../../html/components/comments/comments.scss';

import { swiper, swiperSlide } from 'vue-awesome-swiper';

import '../../../../html/components/popCommon/popCommon.scss';
import '../../../../html/components/dynamic/dynamic.scss';

import QrcodeVue from 'qrcode.vue';

import {
    enterPriseIndex,
    getLikeEnter,
    getNewsIndex,
    AddEnterPost
} from '../../../../api/index';
export default {
    name: 'enterInex',
    components: {
        swiper,
        swiperSlide,
        QrcodeVue
    },
    data() {
        return {
            localHref: location.href,
            currentImgShow: false,
            swiperOption: {
                initialSlide: 0,
                simulateTouch: false,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }

            },
            currentImgList: [

            ],
            showCre: false,
            params: {
                index: 0,
                size: 20
            },
            list: [],
            likeArr: [],
            news: [],
            count: ''
        };
    },
    methods: {
        openPopImgList(imgList, i) {
            console.log(imgList);
            this.currentImgList = imgList;
            this.swiperOption.initialSlide = i;
            // console.log(this.currentImgList);
            this.currentImgShow = true;

        },
        closePopimglist() {
            this.currentImgShow = false;
        },
        async getNewsIndex() {
            let res = await getNewsIndex();
            if (res.Type == 'Success') {
                this.news = res.Data.news;
            }
        },
        async enterPriseIndex() {
            let res = await enterPriseIndex(this.params);
            if (res.Type == 'Success') {
                res.Data.data.forEach(item => {
                    item.zkDir = false;
                    item.isNeedMoreBtn = false;
                });
                this.list = this.list.concat(res.Data.data);
                this.count = res.Data.count;
                this.$nextTick(() => {
                    let dom = document.querySelectorAll('.prise-art-txt .txt-div');
                    dom.forEach((item, i) => {
                        console.log(item.offsetHeight);
                        if (item.offsetHeight > 128) {
                            this.list[i].isNeedMoreBtn = true;
                        }
                    })

                })
            }
        },
        async getLikeEnter() {
            let res = await getLikeEnter();
            if (res.Type == 'Success') {
                this.likeArr = res.Data;
            }
        },
        zkFunc(i) {
            this.list[i].zkDir = !this.list[i].zkDir;
        },
        gotoDetail(id) {
            let routeData = this.$router.resolve({ name: 'enterDetail', params: { id: id } });
            window.open(routeData.href, '_blank');
            // this.$router.push();
        },
        more() {
            this.params.index++;
            this.enterPriseIndex();
        }
    },
    created() {
        this.enterPriseIndex();
        this.getLikeEnter();
        this.getNewsIndex();
    }
};
</script>

<style scoped>
.news-more {
    margin: 0 auto;
    margin-top: 20px;
    width: 200px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    border: 1px solid blanchedalmond;
    text-align: center;
    border-radius: 10px;
}
</style>

