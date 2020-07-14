<template>
    <div class="marketGoods">
        <van-tabs v-model="active" scrollspy sticky style="background-color: red">

            <van-tab v-for="(item,index) in tabList" :title="item.title" :key="index" :name="item.id"
                     class="marketGoods-goods">
                <div class="marketGoods-title1"></div>
                <div class="marketGoods-title">
                    <img :src="item.pic_url" alt="">
                </div>

                <div v-for="(item1,index1) in goodsList[item.id]" :key="index1" class="marketGoods-goods-div">
                    <a :href="item1['share_url']">
                        <div class="m-g-g-d-img">
                            <img v-lazy="item1.pic_url" alt="">
                        </div>
                        <div class="m-g-g-d-title">
                            {{item1.title}}
                        </div>
                        <!--                        <div class="m-g-g-d-info">-->
                        <!--                            {{item.sub_title}}-->
                        <!--                        </div>-->
                        <div class="m-g-g-d-price">
                            <span>￥{{Number(item1.price)}}</span>
                            <label>赚9.93起</label>
                        </div>
                    </a>
                </div>

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
            pid: {
                type: [String, Number],
            }
        },
        mounted() {
            this.getTab();
        },

        methods: {
            getTab() {
                console.log(this.pid)
                getActivity({type: this.pid}).then(res => {
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

            getTabIndex(name, id) {
                console.log(name, id);
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

    .marketGoods {


        .marketGoods-goods {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            overflow: hidden;

            .marketGoods-title1 {
                height: 10px;
                background-color: #fff;
            }

            .marketGoods-title {
                width: 100%;
                height: 50px;
                line-height: 50px;
                background-color: red;
                text-align: center;

                img {
                    width: 100%;
                    height: 50px;
                }
            }


            .marketGoods-goods-div {
                margin-bottom: 4px;
                height: 188px;
                width: 120px;
                background-color: #fff;

                .m-g-g-d-img {
                    img {
                        width: 120px;
                        height: 120px;
                    }
                }

                .m-g-g-d-title {
                    padding: 0 5px;
                    margin-bottom: 6px;
                    font-size: 13px;
                    line-height: 16px;
                    font-weight: 700;
                    color: #333;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .m-g-g-d-info {
                    margin: 0 0 0 11px;
                    width: 140px;
                    height: 24px;
                    font-size: 12px;
                    color: #797979;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .m-g-g-d-price {
                    padding: 0 4px;
                    color: black;

                    span {
                        letter-spacing: -1px;
                        font-size: 14px;
                        font-weight: 700;
                        margin-right: 4px;
                    }

                    label {
                        font-size: 14px;
                        font-weight: 700;
                        color: red;
                    }

                }
            }
        }
    }
</style>