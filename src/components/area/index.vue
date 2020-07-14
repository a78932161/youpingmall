<template>
    <div class="area">
        <div class="area-img" v-for="item in areaList">
            <a :href="item.url">
                <img :src="item.pic_url" alt="">
            </a>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
        props: {
            areaList: {
                type: [Array, Object],
            }
        },
    }
</script>

<style lang="scss" scoped>
    .area {
        margin: 0 auto 10px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 359px;
        background: #ffffff;
        border-radius: 6px;

        .area-img {
            margin-top: 10px;

            img {
                width: 166px;
                height: 96px;
            }
        }
    }
</style>