<template>
    <!--页面主体-->
    <div class="g-container">
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <router-link tag="a"
                             class="c-crumbs"
                             :to="{name:'default'}">首页</router-link>
                <span class="c-sep">&gt;</span>
                <span class="c-current">商城</span>
            </div>
            <!--图片banner-->
            <div class="m-norm-banner mall-banner">
                <div class="pic-banner">
                    <img :src="detail.picPath"
                         alt="" />
                </div>
            </div>
            <!--主体-->
            <div class="mall-goods">
                <div class="mall-goods-item"
                     v-for="(item,i) in detail.goods"
                     :key="i">
                    <div class="goods-pic">
                        <img :src="item.picPath"
                             alt="" />
                    </div>
                    <div class="goods-info">
                        <div class="goods-money">¥ {{item.price}}</div>
                        <div class="goods-txt">{{item.title}}</div>
                        <div class="goods-handle">
                            <div class="goods-buy-btn"
                                 @click="goto(item.id)">立即购买</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import '../../../../html/components/crumbs/crumbs.scss';
import '../../../../html/pages/mall/mall/mall.scss';
import { getMallIndex } from '../../../../api/index.js';
export default {
    name: 'mall',
    data() {
        return {
            detail: {}
        };
    },
    methods: {
        async getMallIndex() {
            let res = await getMallIndex();
            if (res.Type == 'Success') {
                this.detail = res.Data;
            } else {
                this.$layer.alert(res.Content);
            }
        },
        goto(id) {
            this.$router.push({name:'mallDetail',params:{id:id}})
        }
    },
    created() {
        this.getMallIndex();
    }
}
</script>

<style>
</style>
