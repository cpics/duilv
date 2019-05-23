<template>
    <div class="news-item">
        <a class="u-news-hd" href>
            <div class="u-news-pic">
                <img :src="info.title" alt>
            </div>
            <div class="u-news-txt">{{info.title}}</div>
        </a>
        <div class="u-news-list">
            <ul>
                <li>
                    <a href>【要闻】为什么我们遇见一个畸形怪状的身体不。</a>
                </li>
                <li>
                    <a href>【要闻】而遇见一个思路不清的头脑就难以忍受</a>
                </li>
                <li>
                    <a href>【精品】不能不愤慨起来了呢？</a>
                </li>
                <li>
                    <a href>【要闻】因为，一个跛脚的人，承认我们走得正常</a>
                </li>
                <li>
                    <a href>【推荐】而一个跛脚的精神，却说我们是跛却说我们是跛却说我们是跛却说我们是跛</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'news-item',
    props:{
        info:Object
    }
};
</script>

<style>
</style>
