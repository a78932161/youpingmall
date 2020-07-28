<template>
    <div class="revenue">
        <nav-bar title="收益管理"></nav-bar>
        <div class="revenue-balance">
            <div class="balance-title" @click="point">累计收益（元）
                <svg-icon icon-class="提示"/>
            </div>
            <div class="balance-money">100.00</div>
        </div>
        <div class="revenue-info">
            <ul>
                <li>
                    <van-cell value="明细" is-link @click="gotoInfo('累计销售收益')">
                        <template #title>
                            <span class="custom-title">累计销售收益 <span class="revenue-price">66.88</span></span>
                        </template>
                    </van-cell>
                </li>
                <li>
                    <van-cell value="明细" is-link @click="gotoInfo('带结算收益')">
                        <template #title>
                            <span class="custom-title">带结算收益 <span class="revenue-price">66.88</span></span>
                        </template>
                    </van-cell>
                </li>
                <li>
                    <van-cell value="明细" is-link @click="gotoInfo('可提现余额')">
                        <template #title>
                            <span class="custom-title">可提现余额 <span class="revenue-price">66.88</span></span>
                        </template>
                    </van-cell>
                </li>
            </ul>
            <van-cell-group>
                <van-cell title="今日收益" value="0.00"/>
                <van-cell title="本周收益" value="0.00"/>
                <van-cell title="本月收益" value="0.00"/>
                <van-cell title="上月收益" value="0.00"/>
            </van-cell-group>

        </div>

    </div>
</template>

<script>
    import navBar from 'components/navBar/old'

    export default {
        data() {
            return {}
        },
        components: {
            navBar
        },
        methods: {
            gotoInfo(name) {
                switch (name) {
                    case '累计销售收益':
                        this.$router.push('/revenueInfo');
                        break
                    case '带结算收益':
                        this.$router.push('/revenueInfo?id=1');
                        break
                    case '可提现余额':
                        this.$router.push('/withdraw');
                        break
                }
            },

            point() {
                this.$dialog.alert({
                    messageAlign: 'left',
                    title: '收益说明',
                    message:
                        `累计收益 :
统计截止到当前店主的累计收益，含待结算、已结算的收益。
若订单发生退款、取消等操作，累计收益将相应扣除。

待结算收益 :
消费者支付订单后，可看到订单对应的收益，此时收益为待结算。
待结算的收益可能会因买家取消订单、退货退款而产生相应扣除。

可提现余额 :
可对已结算的收益进行提现。`
                }).then(() => {
                    // on close
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .revenue {
        width: 375px;
        height: 100vh;
        background-color: rgb(240, 240, 240);

        .revenue-balance {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 120px;
            background: linear-gradient(270deg, #fb3f4e, #ff5462);
            color: white;

            .balance-title {
                margin-bottom: 10px;
                font-size: 14px;
                color: #ffe6e8;
            }

            .balance-money {
                font-size: 42px;
                color: #fff3f4;
            }

        }

        .revenue-info {
            .custom-title {
                display: flex;
                align-items: center;
            }

            .revenue-price {
                margin-left: 12px;
                font-size: 18px;
                color: #3c3c3c;
            }

            ul {
                li {
                    margin-bottom: 7px;
                }
            }

        }
    }
</style>