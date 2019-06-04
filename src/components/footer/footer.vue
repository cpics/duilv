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
                            <a target="_blank" href="https://weibo.com/p/1006066829964030/home?from=page_100606&mod=TAB&is_hot=1">新浪微博</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.toutiao.com/c/user/5849703835/#mid=1608826122136579">今日头条</a>
                        </li>
                        <li>
                            <a target="_blank" href="http://dy.163.com/v2/article/detail/EBPAOSFP0545571Q.html">网易自媒体</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.zhihu.com/org/dui-lu-yun/posts">知乎平台</a>
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
                            <a target="_blank" :href="item.outLink">{{item.Title}}</a>
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
