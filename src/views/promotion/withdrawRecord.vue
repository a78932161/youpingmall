<template>
    <div class="withdrawRecord">
        <nav-bar title="提现记录"></nav-bar>
        <van-tabs v-model="active" sticky>
            <van-tab v-for="(item,index) in tabList" :title="item">
                <div class="withdrawRecord-item">
                    <ul>
                        <li v-for="item in 6">
                            <div class="item-top">
                                <div class="item-top-type">提现中</div>
                                <div class="item-top-time">2020-07-01 00:06:17</div>
                                <div class="item-top-price">100.00</div>
                            </div>
                            <div class="item-content">
                                <div class="item-content-people">
                                    <label>收款人：</label>
                                    <span>李二狗</span>
                                </div>
                                <div class="item-content-img" @click="showImg">查看收款码</div>
                            </div>
                            <div class="item-remark">
                                失败原因：没钱了
                            </div>
                        </li>
                    </ul>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import navBar from 'components/navBar/old'
    import {ImagePreview} from 'vant';

    export default {
        data() {
            return {
                active: 0,
                tabList: ['全部', '提现中', '提现成功', '提现失败'],
            }
        },
        components: {
            navBar,
            [ImagePreview.Component.name]: ImagePreview.Component,
        },
        methods: {
            showImg() {
                ImagePreview(['https://img.yzcdn.cn/vant/apple-1.jpg']);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .withdrawRecord {
        height: 100vh;
        background-color: rgb(240, 240, 240);

        .withdrawRecord-item {
            margin-top: 8px;
            background-color: #fff;

            ul {
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, .12);
                border-left: none;
                border-right: none;

                li {
                    padding: 16px 0;
                    border-bottom: 1px solid rgba(0, 0, 0, .08);
                }

                li:last-child {
                    border-bottom: none;
                }
            }

            .item-top {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;

                .item-top-type {
                    font-size: 12px;
                    color: #3c3c3c;
                }

                .item-top-time {
                    margin-left: -100px;
                    font-size: 12px;
                    color: #666;
                }

                .item-top-price {
                    margin-right: 20px;
                    font-size: 12px;
                    color: #666;
                }
            }

            .item-content {
                display: flex;
                align-items: center;

                .item-content-people {
                    margin-right: 32px;
                    font-size: 14px;
                    color: #999;

                    span {
                        color: #666;
                    }
                }

                .item-content-img {
                    font-size: 12px;
                    color: #666;
                    text-decoration: underline;
                }
            }

            .item-remark {
                margin-top: 10px;
                font-size: 12px;
                color: #999;
            }

        }
    }
</style>