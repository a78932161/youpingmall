<template>
    <div class="promotion">
        <div class="promotion-bg"></div>
        <div class="promotion-content">
            <div class="promotion-content-income">

                <div class="div1">
                    <router-link to="/revenue">
                        <label class="title">累计收益（元）</label>
                        <div class="income">100.00</div>
                    </router-link>
                </div>


                <div class="promotion-content-info">
                    <ul>
                        <li>
                            <router-link to="/revenue">
                                <label>本月收益</label>
                                <span>100.00</span>
                            </router-link>
                        </li>
                        <li class="listyle" @click="$router.push('/withdraw')">
                            <span class="info-tag">可提现</span>
                            <label>
                                余额
                            </label>
                            <span>100.00</span>
                        </li>
                        <li>
                            <router-link to="/user?id=1">
                                <label>今日新增</label>
                                <span>100.00</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="promotion-content-navBar">
                <button @click="$router.push('/user')">
                    <svg-icon icon-class="用户管理" class="icons"/>
                    用户管理
                </button>
                <button @click="$router.push('/revenue')">
                    <svg-icon icon-class="收益管理" class="icons"/>
                    收益管理
                </button>
            </div>
            <div class="promotion-content-qr">
                <img class="avatar"
                     src="//wwc.alicdn.com/avatar/getAvatar.do?userNick=lhzqaq&width=50&height=50&type=sns&_input_charset=UTF-8"
                     alt="">
                <div class="name">微信名</div>
                <div class="note">推广二维码</div>

                <img src="~assets/img/qr.png" width="228" height="228"/>
                <div class="note">长按保存到本地</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    @import "~assets/style/mixin";

    .promotion {
        position: relative;
        height: 100vh;
        background-color: rgb(247, 247, 247);
        overflow: hidden;

        .promotion-bg {
            width: 375px;
            height: 116px;
            background: linear-gradient(270deg, #fb3f4e, #ff5462);
            border-radius: 0 0 8px 8px;
        }

        .promotion-content {
            position: absolute;
            left: 0;
            top: 0;
            padding: 10px;

            .promotion-content-income {
                box-sizing: border-box;
                margin-bottom: 10px;
                padding: 20px 16px;
                width: 355px;
                height: 146px;
                background: #fff;
                border-radius: 8px;

                .div1 {
                    width: 100px;
                    height: 55px;
                }


                .title {
                    font-size: 13px;
                    color: #666;
                }

                .income {
                    margin-left: -2px;
                    line-height: 37px;
                    font-size: 28px;
                    color: #3c3c3c;
                }
            }

            .promotion-content-info {
                margin-top: 9px;

                .listyle {
                    position: relative;
                }

                .info-tag {
                    position: absolute;
                    right: -22px;
                    top: -11px;
                    display: inline;
                    padding: 2px;
                    font-size: 10px;
                    font-weight: normal;
                    color: #f30b2c;
                    border: 1px solid #f30b2c;
                    border-radius: 3px;
                }

                ul {
                    display: flex;
                    justify-content: space-between;

                    li {
                        label {
                            font-size: 13px;
                            color: #999;
                        }

                        span {
                            margin-top: 9px;
                            display: block;
                            font-size: 16px;
                            font-weight: 700;
                            color: #3c3c3c;
                        }
                    }
                }
            }

            .promotion-content-navBar {
                height: 68px;
                border-radius: 8px;

                .icons {
                    font-size: 20px;
                    margin-right: 6px;
                }


                button {
                    border: none;
                    width: 50%;
                    height: 100%;
                    background: #fff;
                    font-size: 13px;
                    color: #666;
                }
            }

            .promotion-content-qr {
                text-align: center;
                margin-top: 10px;
                height: 460px;
                background: #fff;
                border-radius: 8px;

                .name {
                    margin-bottom: 10px;
                    font-size: 16px;
                    color: #333;
                }

                .note {
                    font-size: 12px;
                    color: #999;
                }

                .avatar {
                    margin-top: 26px;
                    margin-bottom: 9px;
                    width: 68px;
                    height: 68px;
                    border-radius: 50%;
                }
            }
        }
    }
</style>