<template>
    <div class="withdrawInfo">
        <nav-bar title="收入明细"></nav-bar>
        <van-search v-model="value" placeholder="请输入搜索关键词"/>
        <div class="info-item">
            <ul>
                <li v-for="index in 5">
                    <div class="item-left">
                        <div>
                            <img class=""
                                 src="//wwc.alicdn.com/avatar/getAvatar.do?userNick=lhzqaq&width=50&height=50&type=sns&_input_charset=UTF-8"
                                 alt="">
                        </div>
                        <div>
                            <div class="item-wxName">李二狗</div>
                            <div class="item-time">2020-07-01 00:06:17</div>
                            <div class="item-id">订单编号：202012345677777</div>
                        </div>
                    </div>
                    <div class="item-right">
                        <div class="item-price">+25.80</div>
                        <div class="item-tag">贡献收益</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import navBar from 'components/navBar/old'

    export default {
        data() {
            return {
                value: '',
            }
        },
        components: {
            navBar
        },
    }
</script>

<style lang="scss" scoped>
    .withdrawInfo {
        height: 100vh;
        background-color: rgb(240, 240, 240);

        .info-item {
            margin-top: 8px;
            background-color: #fff;

            .item-left {
                display: flex;

                img {
                    margin-right: 10px;
                    width: 33px;
                    height: 33px;
                }

                .item-wxName {
                    margin-top: 6px;
                    margin-bottom: 10px;
                    font-size: 15px;
                    color: #3c3c3c;
                }

                .item-time {
                    margin-bottom: 10px;
                    font-size: 12px;
                    color: #666;
                }

                .item-id {
                    font-size: 12px;
                    color: #9a9a9a;
                }
            }

            .item-right {
                margin-top: 6px;
                margin-right: 20px;

                .item-price {
                    margin-bottom: 10px;
                    font-size: 16px;
                    color: #ef990f;
                }

                .item-tag {
                    font-size: 12px;
                    color: #9a9a9a;
                }
            }


            ul {
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, .12);
                border-left: none;
                border-right: none;

                li {
                    display: flex;
                    justify-content: space-between;
                    padding-top: 16px;
                    height: 82px;
                    border-bottom: 1px solid rgba(0, 0, 0, .08);
                }

                li:last-child {
                    border-bottom: none;
                }
            }
        }
    }
</style>