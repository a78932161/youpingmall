<template>
    <div class="category">
        <van-search
                @click="goto"
                disabled
                shape="round"
                background="#fff"
                placeholder="搜索你想买的商品"
        >
            <template #left>
                <div class="category-search-left" @click="$router.push('/')">
                    <svg-icon icon-class="返回"/>
                </div>
            </template>
        </van-search>
        <div class="category-content">
            <van-sidebar v-model="activeKey" @change="onChange" class="category-sidebar">
                <van-sidebar-item v-for="(item,index) in navList" :title="item.name" :key="index"/>
            </van-sidebar>
            <div class="category-right">
                <div class="category-right-title">热门分类</div>
                <div class="category-right-item">
                    <a :href="item1.url" v-for="(item1,index1) in navList[activeKey]['list']" :key="index1">
                        <img :src="item1.pic_url" class="category-right-item-img" alt="">
<!--                        <img v-lazy="item1.pic_url" class="category-right-item-img" alt=""/>-->
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navBar from 'components/navBar/index'
    import {getNav} from "api/dome";

    export default {
        components: {
            navBar
        },
        data() {
            return {
                activeKey: 0,
                navList: [
                    {name: '', list: []}
                ],
            }
        },
        mounted() {
            this.getList();
        },
        methods: {
            onChange(index) {
                console.log(index);
            },
            goto() {
                window.location.href = 'https://m.yiupin.com/consumer/search?shopId=32b0bdaf4fd04907aafcd99271b646b1@dist.163.com'
            },
            getList() {
                getNav().then(res => {
                    this.navList = res.data.data.list.map(val => {
                        console.log(val.child.length);
                        return {
                            name: val.name,
                            list: val.child.length > 0 ? val.child : [],
                        }
                    })
                    console.log(this.navList);
                });
            }
        },
    }
</script>

<style lang="scss" scoped>
    ::v-deep {
        .category-sidebar .van-sidebar-item {
            text-align: center;
        }
    }


    .category {

        .category-search-left {
            margin-right: 26px;
        }

        .category-content {

            display: flex;

            .category-sidebar {
                min-height: 94.2vh;
                width: 105px;
                background-color: rgb(247, 248, 250);
            }

            .category-right {
                width: 77%;

                .category-right-title {
                    margin: 0 10px;
                    height: 59px;
                    line-height: 59px;
                    font-size: 15px;
                    font-weight: 600;
                    border-bottom: 1px solid rgba(220, 220, 220, .4);
                }

                .category-right-item {
                    display: flex;
                    flex-wrap: wrap;
                    padding: 0 12px;
                    margin-top: 18px;

                    .category-right-item-img {
                        margin-left: 4px;
                        margin-bottom: 20px;
                        height: 105px;
                        width: 79px;
                    }

                }
            }
        }

    }
</style>