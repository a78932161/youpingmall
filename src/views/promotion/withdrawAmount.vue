<template>
    <div class="withdrawAmount">
        <nav-bar title="提现"></nav-bar>
        <div class="amount-balance">
            <div class="text">提现金额（元）</div>
            <div class="amount-balance-input">
                <label>
                    <span class="label">￥</span>
                    <input class="input" type="number" placeholder="本次可提现100.00元">
                </label>
            </div>
            <div class="text">当前可提现金额：100.00</div>
        </div>
        <div class="amount-name">
            <label>
                <span class="name">收款码真实姓名：</span>
                <input class="name-input" type="text" placeholder="请输入收款码真实姓名">
            </label>
        </div>
        <div class="amount-up">
            <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1"/>
            <div class="up-point">请上传微信收款码</div>
        </div>
        <van-button class="amount-button" type="primary" block>提 现</van-button>
        <van-button class="amount-button" type="primary" disabled block>提 现</van-button>
    </div>
</template>

<script>
    import navBar from 'components/navBar/old'

    export default {
        data() {
            return {
                fileList: [],
            }
        },
        components: {
            navBar
        },
        methods: {
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
                this.fileList.push()
            },
        },
    }
</script>

<style lang="scss" scoped>
    .withdrawAmount {
        height: 100vh;
        background-color: rgb(240, 240, 240);

        .amount-balance {
            margin: 8px 0;
            padding: 16px 0 0 20px;
            height: 134px;
            background: #fff;

            .text {
                font-size: 14px;
                color: #666;
            }

            .amount-balance-input {
                display: flex;
                align-items: center;
                margin-bottom: 14px;
                height: 72px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);


                label {
                    display: flex;
                    align-items: center;
                }

                .label {
                    font-size: 36px;
                    color: #151515;
                }

                .input {
                    width: 250px;
                    height: 60px;
                    font-size: 15px;
                }
            }
        }

        .amount-name {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            background-color: #fff;
            height: 48px;

            label {
                margin-left: 22px;

            }

            .name {
                font-size: 15px;
                color: #151515;
            }

            .name-input {
                font-size: 15px;
                height: 48px;
            }
        }

        .amount-up {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-bottom: 30px;
            height: 160px;
            background: #fff;

            .up-point {
                margin-top: 8px;
                font-size: 14px;
                color: #666;
            }
        }

        .amount-button {
            border: none;
            width: 90%;
            background-color: #FE5160;
            font-size: 15px;
            margin: 10px auto;
        }
    }
</style>