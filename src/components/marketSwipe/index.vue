<template>
    <div>
        <van-swipe :autoplay="3000" class="marketSwipe" :stop-propagation="false" indicator-color="rgb(252,71,86)">
            <van-swipe-item v-for="(item, index) in swipeList" :key="index">
                <img v-lazy="item.pic_url" class="marketSwipe-img" @click="goto(item.url)"/>
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
            swipeList: {
                type: [Object, Array],
            },
        },

        methods: {
            goto(url) {
                console.log(url);
                if (url) {
                    location.href = url;
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
    .marketSwipe {
        width: 375px;
        height: 170px;
    }

    .marketSwipe-img {
        width: 100%;
        height: 100%;
    }
</style>