<template>
    <div class="revenueInfo">
        <nav-bar title="收益明细"></nav-bar>
        <div class="revenueInfo-nav">
            <van-tabs v-model="active" sticky>
                <van-tab v-for="(item,index) in tabList" :title="item" :key="index">
                    <div class="itemList" v-for="index1 in 8">
                        <div class="itemList-title">
                            <div class="info-title">2020-07-01 00:06:17</div>
                            <div>待结算</div>
                        </div>
                        <div class="itemList-content">
                            <div>
                                <img class="itemList-content-img"
                                     src="//wwc.alicdn.com/avatar/getAvatar.do?userNick=lhzqaq&width=50&height=50&type=sns&_input_charset=UTF-8"
                                     alt="">
                            </div>

                            <div>
                                <div class="content-title">订单编号：202012345677777</div>
                                <div>买家微信：李新宇2号</div>
                            </div>

                        </div>
                        <div class="itemList-bottom">
                            <span class="info-title">实付金额:￥24.00</span>
                            <span class="make">收益:￥1.23</span>
                        </div>
                    </div>

                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    import navBar from 'components/navBar/old'

    export default {
        data() {
            return {
                active: 0,
                tabList: ['全部', '带结算', '已结算', '已失效'],
            }
        },
        components: {
            navBar
        },
        mounted() {
            console.log(this.$route.query);
            if (this.$route.query) {
                this.active = Number(this.$route.query.id);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .revenueInfo {
        height: 100vh;
        background-color: rgb(240, 240, 240);

        .revenueInfo-nav {
            .itemList {
                margin-top: 8px;
                padding-left: 18px;
                background: #fff;

                .info-title {
                    font-size: 12px;
                    color: #999;
                }

                .itemList-title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-right: 18px;
                    height: 36px;
                    font-size: 12px;
                }

                .itemList-content {
                    display: flex;
                    align-items: center;
                    height: 66px;
                    line-height: 20px;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    border-left: none;
                    border-right: none;

                    .itemList-content-img {
                        margin-right: 10px;
                        width: 46px;
                        height: 46px;
                    }

                    .content-title {
                        font-size: 14px;
                        color: #9a9a9a;
                    }

                }

                .itemList-bottom {
                    margin-right: 18px;
                    text-align: right;
                    height: 28px;
                    line-height: 28px;

                    span {
                        font-size: 12px;
                    }

                    .make {
                        color: rgb(252, 71, 86);
                        margin-left: 24px;
                    }
                }
            }
        }
    }
</style>