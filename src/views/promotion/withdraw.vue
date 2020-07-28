<template>
    <div class="withdraw">
        <nav-bar title="提现"></nav-bar>
        <div class="balance-bar">
            <div class="balance-bar-div">
                <div class="balance-bar-title">可提现余额</div>
                <div class="balance-bar-price">100.00</div>
                <button class="balance-bar-button" @click="$router.push('/withdrawAmount')">提 现</button>
            </div>
        </div>
        <div class="balance-content">
            <ul>
                <li>
                    <van-cell is-link @click="$router.push('/withdrawInfo')">
                        <template #title>
                            <span class="custom-title">收入明细</span>
                        </template>
                    </van-cell>
                </li>
                <li>
                    <van-cell is-link @click="$router.push('/withdrawRecord')">
                        <template #title>
                            <span class="custom-title">提现记录</span>
                        </template>
                    </van-cell>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import navBar from 'components/navBar/old'

    export default {
        components: {
            navBar
        },
    }
</script>

<style lang="scss" scoped>
    .withdraw {
        height: 100vh;
        background-color: rgb(240, 240, 240);

        .balance-bar {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 232px;
            background: #fff;

            .balance-bar-div {
                text-align: center;
            }

            .balance-bar-title {
                margin-bottom: 10px;
                font-size: 14px;
                color: #666;
            }

            .balance-bar-price {
                margin-bottom: 8px;
                font-size: 40px;
                color: #3c3c3c;
            }

            .balance-bar-button {
                width: 150px;
                height: 37px;
                background: #fff;
                color: #ff5858;
                border: 1px solid #ff5858;
                border-radius: 19px;
            }

        }

        .balance-content {
            ul {
                li {
                    margin-top: 8px;
                }
            }
        }

    }
</style>