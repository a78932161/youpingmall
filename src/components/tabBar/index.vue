<template>
    <div class="tabBar">
        <van-tabbar route safe-area-inset-bottom active-color="rgb(252, 71, 86)">
            <van-tabbar-item replace to="/" icon="home-o">
                首页
            </van-tabbar-item>
            <van-tabbar-item replace to="/my" icon="contact">
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    .tabBar {

    }
</style>