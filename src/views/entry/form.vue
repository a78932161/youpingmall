<template>
    <div>
        <van-cell-group class="entry-div">
            <van-field
                    class="entry-div-input"
                    v-model="name"
                    required
                    label="微信名"
                    placeholder="请输入微信名"
                    @focus="showSearch"
                    @blur="showSearch"
            />

            <transition name="van-slide-right">
                <div class="entry-div-search" v-show="search">
                    <ul>
                        <li>123</li>
                        <li>123</li>
                        <li>123</li>
                        <li>123</li>
                    </ul>
                </div>
            </transition>


            <van-field label="上级分销商" value="" readonly/>
            <van-field
                    v-model="name"
                    required
                    label="订单编号"
                    placeholder="请输入订单编号"
            />
            <van-field
                    v-model="name"
                    required
                    label="下单时间"
                    placeholder="请输入下单时间"
            />
            <van-field
                    v-model="name"
                    required
                    label="店铺收益金额"
                    placeholder="请输入店铺收益金额"
            />
            <van-field
                    v-model="name"
                    required
                    label="实付金额"
                    placeholder="请输入实付金额"
            />

            <van-field label="分销商收益" value="按原始收益的20%返利" readonly/>

            <van-field
                    v-model="name"
                    required
                    rows="2"
                    autosize
                    label="收货地址"
                    type="textarea"
                    maxlength="100"
                    placeholder="请输入收货地址"
                    show-word-limit
            />

            <van-cell title="带结算" clickable>
                <template #right-icon>
                    <van-radio name="0" v-model="radio"/>
                </template>
            </van-cell>

        </van-cell-group>
        <van-button class="entry-button" type="primary" block round size="normal">提 交</van-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                search: false,
                name: '',
                radio: "0",
            }
        },

        methods: {
            showSearch() {
                this.search = !this.search
            }
        }
    }
</script>

<style lang="scss" scoped>
    .entry-div {
        .entry-div-input {
            position: relative;
        }

        .entry-div-search {
            position: absolute;
            top: 30px;
            right: 3px;
            width: 260px;
            height: 100px;
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, .1);
            z-index: 9999;
            overflow: hidden;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;

            ul {
                li {
                    padding: 10px;
                    height: 30px;

                    font-size: 12px;
                }
            }
        }
    }

    .entry-button {
        margin: 10px auto;
        border: none;
        background-color: #FE5160;
        font-size: 15px;
    }
</style>