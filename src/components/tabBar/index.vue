<template>
    <div class="tabBar">
        <van-tabbar route safe-area-inset-bottom active-color="rgb(252, 71, 86)">
            <van-tabbar-item replace to="/entry/form" icon="edit">
                输入录入
            </van-tabbar-item>
            <van-tabbar-item replace to="/entry/info" icon="description">
                录入记录
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