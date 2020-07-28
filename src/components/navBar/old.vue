<template>
    <div class="navBar">
        <van-nav-bar
                :title="title"
                left-arrow
                @click-left="onClickLeft"
        />
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: '标题'
            }
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    ::v-deep {
        .van-nav-bar .van-icon {
            color: #151515;
        }
    }
</style>