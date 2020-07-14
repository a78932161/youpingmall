<template>
    <div class="tabList">
        <van-tabs v-model="active" scrollspy sticky @change="getTabIndex">
            <van-tab v-for="(item,index) in tabList" :title="item.title" :key="index" :name="item.id">
                <lazy-component>
                    <img :src="item.pic_url" alt="" class="tabList-ad">
                    <div v-for="(item1,index1) in goodsList[item.id]" :key="index1" class="tabList-goods">
                        <a :href="item1['share_url']">
                            <div class="tabList-goods-l">
                                <img v-lazy="item1.pic_url" alt=""/>
                            </div>
                            <div class="tabList-goods-r">
                                <div class="tabList-goods-r-title">{{item1.title}}</div>
                                <div class="tabList-goods-r-info">
                                    {{item.sub_title}}
                                </div>
                                <div class="tabList-goods-r-price">
                                    <div class="tabList-goods-r-price-left">
                                        <span>￥{{exceed(item1.price)}}</span>
                                        <em>￥{{exceed(item1.original_price)}}</em>
                                    </div>
                                    <div class="tabList-goods-r-price-right">
                                        <van-button round type="info" color="#FF2227">立即购买</van-button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </lazy-component>

            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import {getActivity, getGoods} from "api/dome";

    export default {
        data() {
            return {
                active: 0,
                tabList: [],
                goodsList: [],
            }
        },
        props: {
            tabId: {
                type: [String, Number],
                default: 0,
            }
        },
        mounted() {
            this.getTab();
        },
        methods: {
            getTab() {
                getActivity({type: this.tabId}).then(res => {
                    console.log('res', res);
                    this.tabList = res.data.data.list;
                    for (let item in this.tabList) {
                        if (this.tabList.hasOwnProperty(item)) {
                            this.getGoodsList(item);
                        }
                    }
                });
            },

            getGoodsList(index) {
                let id = this.tabList[index].id;
                getGoods({act_id: id}).then(res => {
                    this.$set(this.goodsList, `${id}`, res.data.data.list);
                })
            },

            getTabIndex(id, name) {
                console.log(id, name);
            },
            exceed(data) {
                if (Number(data) > 99) {
                    return Number(data)
                } else {
                    return data
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    ::v-deep {
        * {
            touch-action: auto !important;
        }

        .van-tabs__content {
            padding-bottom: 30px;
        }
    }


    .tabList {
        margin-top: 11px;

        .tabList-ad {
            height: 46px;
            width: 100%;
        }

        .tabList-goods {
            a {
                display: flex;
            }

            margin: 10px;
            width: 355px;
            height: 128px;
            background: #fff;
            border-radius: 6px;


            .tabList-goods-l {
                margin: 14px;

                img {
                    width: 100px;
                    height: 100px;
                }
            }

            .tabList-goods-r {
                margin: 14px;

                .tabList-goods-r-title {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    -webkit-box-orient: vertical;
                    margin-bottom: 6px;
                    font-size: 16px;
                    color: #131313;
                    line-height: 20px;
                }

                .tabList-goods-r-info {
                    margin-bottom: 8px;
                    width: 207px;
                    height: 32px;
                    font-size: 12px;
                    color: #797979;
                }

                .tabList-goods-r-price {
                    .tabList-goods-r-price-left {
                        float: left;

                        span {
                            font-size: 18px;
                            font-weight: 700;
                            color: #ea0f1c;
                            margin-right: 6px;
                        }

                        em {
                            font-style: normal;
                            font-size: 12px;
                            text-decoration: line-through;
                            color: #939393;
                        }
                    }

                    .tabList-goods-r-price-right {
                        float: right;

                        button {
                            margin-top: -6px;
                            font-size: 12px;
                            width: 82px;
                            height: 26px;
                        }
                    }
                }
            }
        }
    }
</style>