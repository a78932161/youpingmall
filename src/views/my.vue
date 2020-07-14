<template>
    <div>
        <navBar title="我的"></navBar>
        <router-link to="market?id=1">
            <van-button type="primary" block>去销售页面</van-button>
        </router-link>
    </div>
</template>

<script>
    import navBar from '../components/navBar/index'

    export default {
        components: {
            navBar
        },
    }
</script>

<style scoped>

</style>