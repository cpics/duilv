<template>
    <!--页面主体-->
    <div class="g-container">
        <div class="m-container m-width">
            <!--面包屑-->
            <div class="crumbs-box">
                <a class="c-crumbs"
                   href="">首页</a>
                <span class="c-sep">&gt;</span>
                <span class="c-current">商城</span>
            </div>
            <!--轮播-banner-->
            <div class="m-slider-banner mall-banner">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a class="oper-pic"
                               href="javascript:;"
                               style="background-image: url('../../../../html/components/banner/images/banner1.png');"></a>
                        </div>
                        <div class="swiper-slide">
                            <a class="oper-pic"
                               href="javascript:;"
                               style="background-image: url('../../../../html/components/banner/images/banner.png');"></a>
                        </div>
                    </div>
                    <div class="swiper-pagination swiper-pagination-bullets">
                        <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                        <span class="swiper-pagination-bullet"></span>
                    </div>
                </div>
            </div>
            <!--主体-->
            <div class="mall-goods">
                <div class="mall-goods-item">
                    <div class="goods-pic">
                        <img src="../../../../html/pages/home/images/demo.png"
                             alt="" />
                    </div>
                    <div class="goods-info">
                        <div class="goods-money">¥ 3999.00</div>
                        <div class="goods-txt">水性EAU丙烯酸高环保渗水型跑道酸高环保渗水型跑道（XC-RT2110S）(100㎡起含施工)</div>
                        <div class="goods-handle">
                            <div class="goods-buy-btn">立即购买</div>
                        </div>
                    </div>
                </div>
                <div class="mall-goods-item">
                    <div class="goods-pic">
                        <img src="../../../../html/pages/home/images/demo.png"
                             alt="" />
                    </div>
                    <div class="goods-info">
                        <div class="goods-money">¥ 3999.00</div>
                        <div class="goods-txt">水性EAU丙烯酸高环保渗水型跑道（XC-RT2110S）(100㎡起含施工)</div>
                        <div class="goods-handle">
                            <div class="goods-buy-btn">立即购买</div>
                        </div>
                    </div>
                </div>
                <div class="mall-goods-item">
                    <div class="goods-pic">
                        <img src="../../../../html/pages/home/images/demo.png"
                             alt="" />
                    </div>
                    <div class="goods-info">
                        <div class="goods-money">¥ 3999.00</div>
                        <div class="goods-txt">水性EAU丙烯酸高环保渗水型跑道（XC-RT2110S）(100㎡起含施工)</div>
                        <div class="goods-handle">
                            <div class="goods-buy-btn">立即购买</div>
                        </div>
                    </div>
                </div>
                <div class="mall-goods-item">
                    <div class="goods-pic">
                        <img src="../../../../html/pages/home/images/demo.png"
                             alt="" />
                    </div>
                    <div class="goods-info">
                        <div class="goods-money">¥ 3999.00</div>
                        <div class="goods-txt">水性EAU丙烯酸高环保渗水型跑道（XC-RT2110S）(100㎡起含施工)</div>
                        <div class="goods-handle">
                            <div class="goods-buy-btn">立即购买</div>
                        </div>
                    </div>
                </div>
                <div class="mall-goods-item">
                    <div class="goods-pic">
                        <img src="../../../../html/pages/home/images/demo.png"
                             alt="" />
                    </div>
                    <div class="goods-info">
                        <div class="goods-money">¥ 3999.00</div>
                        <div class="goods-txt">水性EAU丙烯酸高环保渗水型跑道（XC-RT2110S）(100㎡起含施工)</div>
                        <div class="goods-handle">
                            <div class="goods-buy-btn">立即购买</div>
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
        return {};
    },
    methods: {
        async getMallIndex() {
            let res = await getMallIndex();

        }
    },
    created() {
        this.getMallIndex();
    }
}
</script>

<style>
</style>
