<template>
    <div class="box_wrapper">
        <div class="box_wrapper-item" v-for="(item,index) in boxList" :key="index">
            <a :href="item.url">
                <div class="box_wrapper-img">
                    <img :src="item.pic_url" alt="">
                </div>
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
        props:{
            boxList:{
                type: [Array, Object],
            }
        },
    }
</script>

<style lang="scss" scoped>
    .box_wrapper {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        padding: 0 10px;
        /*height: 178px;*/
        /*overflow: hidden;*/

        .box_wrapper-item {
            margin-right: 20px;
            margin-bottom: 20px;
        }

        .box_wrapper-item:nth-child(5n) {
            margin-right: 0;
        }

        .box_wrapper-img {
            img {
                width: 54px;
                height: 70px;
            }
        }

    }
</style>