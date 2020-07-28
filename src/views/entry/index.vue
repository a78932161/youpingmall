<template>
    <div class="entry">
        <router-view class="entry-tab"></router-view>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import indexForm from './form'
    import tabBar from 'components/tabBar/index'

    export default {
        data() {
            return {
                active: 0,
                navList: ['全部', '待结算', '已结算', '已失效'],
            }
        },
        components: {
            indexForm,
            tabBar
        }

    }
</script>

<style lang="scss" scoped>
    .entry {
        .entry-tab {
            margin-bottom: 10vh;
        }
    }
</style>