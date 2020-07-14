<template>
    <div class="search">
        <van-search
                disabled
                show-action
                shape="round"
                background="rgb(252,71,86)"
                placeholder="请输入搜索关键词"
                @click="goto"
        >
            <template #left>
                <div class="search-left">
                    <svg-icon icon-class="logo" class="search-icon"/>
                    <div class="search-icon-title">全球好物</div>
                </div>
            </template>
            <template #action>
                <div class="search-right" @click="$router.push('/category')">
                    <svg-icon icon-class="分类" class="search-right-icon"/>
                </div>
            </template>

        </van-search>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            goto() {
                window.location.href = 'https://m.yiupin.com/consumer/search?shopId=32b0bdaf4fd04907aafcd99271b646b1@dist.163.com'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search {
        .search-left {
            text-align: center;
            margin-right: 12px;
        }

        .search-icon {
            font-size: 18px;
        }

        .search-icon-title {
            color: white;
        }

        .search-right {
            margin-right: 10px;
        }

        .search-right-icon {
            font-size: 17px;
        }

    }
</style>