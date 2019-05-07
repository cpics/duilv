<template>
    <div class="m-footer-links">
        <div class="foot-link-hd m-width">
            <div class="links-col">
                <h2>关于我们</h2>
                <div class="links-list">
                    <ul>
                        <li>
                            <a href>关于我们</a>
                        </li>
                        <li>
                            <a href>联系我们</a>
                        </li>
                        <li>
                            <a href>商务合作</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="links-col">
                <h2>关注我们</h2>
                <div class="links-list">
                    <ul>
                        <li>
                            <a href>微信公众号</a>
                        </li>
                        <li>
                            <a href>新浪微博</a>
                        </li>
                        <li>
                            <a href>百家号</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="links-col">
                <h2>友情链接</h2>
                <div class="links-list">
                    <ul>
                        <li v-for="(item,index) in footData"
                            :key="index">
                            <a :href="item.outLink">{{item.title}}</a>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="links-code">
                <div class="links-code-pic">
                    <img :src="require('../../html/components/footer/images/code.png')"
                         alt>
                </div>
                <div class="links-code-txt">
                    <p>扫描二维码</p>
                    <p>关注堆绿公众号</p>
                </div>
                <i class="fly-icon"></i>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="m-width">2017 堆绿网 Copyright www.duilv.com All rights reserved 苏ICP备13002314号</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'h-footer',
    props: {
        footData: Array
    }
};
</script>

<style>
</style>
