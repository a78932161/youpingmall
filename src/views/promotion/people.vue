<template>
    <div class="people">
        <div style="padding-left: 26px;">
            <div class="people-name">推广人</div>
            <div class="people-content">
                <img class="people-img"
                     src="//wwc.alicdn.com/avatar/getAvatar.do?userNick=lhzqaq&width=50&height=50&type=sns&_input_charset=UTF-8"
                     alt="">
                <div class="people-info">
                    <div>
                        <label>
                            李二狗
                            <svg-icon icon-class="男" style="vertical-align: bottom;"/>
                        </label>
                        <span>美国 洛杉矶</span>
                    </div>
                </div>
            </div>
        </div>
        <van-button class="people-button" type="primary" block @click="related">确定关联</van-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            related() {
                location.href = 'http://mp.weixin.qq.com/mp/getmasssendmsg?__biz=MzI4OTA5MTI4Nw==#wechat_redirect';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .people {
        height: 100vh;
        .people-name {
            padding-top: 40px;
            margin-bottom: 16px;
            font-size: 22px;
            color: #3c3c3c;
        }

        .people-content {
            display: flex;

            .people-img {
                margin-right: 10px;
                width: 80px;
                height: 80px;
            }

            .people-info {
                display: flex;
                align-items: center;

                label {
                    display: block;
                    margin-bottom: 14px;
                    font-size: 14px;
                    color: #3c3c3c;
                }

                span {
                    font-size: 12px;
                    color: #999;
                }
            }

        }

        .people-button {
            margin: 50px auto;
            border: none;
            width: 90%;
            background-color: #FE5160;
            font-size: 15px;
        }

    }
</style>