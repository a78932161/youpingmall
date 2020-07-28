<template>
    <div class="user">
        <nav-bar title="用户管理"></nav-bar>
        <div class="user-nav">
            <van-tabs v-model="active" sticky>
                <van-tab v-for="(item,index) in navList" :title="item" :key="index">
                    <div class="nav-item">
                        <ul>
                            <li v-for="index in 6">
                                <div class="nav-item-left">
                                    <img class=""
                                         src="//wwc.alicdn.com/avatar/getAvatar.do?userNick=lhzqaq&width=50&height=50&type=sns&_input_charset=UTF-8"
                                         alt="">
                                    <span>李二狗</span>
                                </div>
                                <div class="nav-item-right">
                                    2020-07-01
                                </div>
                            </li>
                        </ul>
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
                navList: ['全部用户', '今日新增用户'],
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
    .user {
        height: 100vh;
        background-color: rgb(240, 240, 240);

        .user-nav {

            .nav-item {
                margin-top: 8px;
                background-color: #fff;

                ul {
                    border: 1px solid rgba(0, 0, 0, .12);
                    border-left: none;
                    border-right: none;

                    li {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0 16px;
                        height: 74px;
                        border-bottom: 1px solid rgba(0, 0, 0, .08);
                    }

                    li:last-child {
                        border-bottom: none;
                    }
                }

                .nav-item-left {
                    display: flex;
                    align-items: center;

                    img {
                        width: 42px;
                        height: 42px;
                        margin-right: 10px;
                    }

                    span {
                        font-size: 14px;
                        color: #3c3c3c;
                    }
                }

                .nav-item-right {
                    font-size: 14px;
                    color: #999;
                }
            }
        }
    }
</style>