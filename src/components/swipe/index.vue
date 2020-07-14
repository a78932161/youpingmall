<template>
    <div>
        <van-swipe :autoplay="3000" :style="size" class="swipe-radius" :stop-propagation="false"
                   indicator-color="rgb(252,71,86)">
            <van-swipe-item v-for="(item, index) in images" :key="index">
                <img v-lazy="item.pic_url" class="swipe-img" :style="size" @click="goto(item.url)"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: {
            images: {
                type: [Array, Object],
                default: () => [
                    {
                        id: 4,
                        pic_url: "https://ypzj-oss.oss-cn-zhangjiakou.aliyuncs.com/account/33/prop/20190804221842R7BneDRwjDkJW6ZrQej.jpg",
                        sort: 99,
                        title: "heihei",
                        type: 0,
                        url: "http://www.baidu.com"
                    },
                    {
                        id: 4,
                        pic_url: "https://ypzj-oss.oss-cn-zhangjiakou.aliyuncs.com/account/33/prop/20190804221842R7BneDRwjDkJW6ZrQej.jpg",
                        sort: 99,
                        title: "heihei",
                        type: 0,
                        url: "http://www.baidu.com"
                    },
                ]
            },
            size: {
                type: [Array, Object],
                default: () => {
                    return {
                        width: '375px',
                        height: '142px',
                    }
                }
            }
        },
        methods: {
            goto(url) {
                console.log(url);
                if (url) {
                    location.href = url;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .swipe {
        width: 375px;
        height: 142px;

        .swipe-radius {
            border-radius: 10px;
        }

        .swipe-img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    }
</style>