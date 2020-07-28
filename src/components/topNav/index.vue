<template>
    <div class="topNav">
        <ul>
            <li v-for="(item,index) in list" :key="index" :class="{'currentLi':current===index}"
                @click="getIndex(index)">
                {{item.name}}
            </li>
        </ul>
        <div class="nav-mask" @click="$router.push('/category')">
            <svg-icon icon-class="分类" class="nav-mask-icon"/>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                current: 0,
            }
        },
        props: {
            list: {
                type: Array
            }
        },
        methods: {
            getIndex(index) {
                this.current = index;
                this.$emit('current', index);
            }
        }
    }
</script>

<style lang="scss" scoped>

    .topNav {
        display: flex;
        width: 100%;
        height: 40px;

        .nav-mask {
            width: 38px;
            height: 40px;
            line-height: 40px;

            .nav-mask-icon {
                margin-left: 10px;
                font-size: 18px;
            }
        }

        ul::-webkit-scrollbar {
            display: none;
        }

        ul {
            display: flex;
            align-items: center;
            display: -webkit-box;
            overflow-x: scroll;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            -webkit-backface-visibility: hidden;
            white-space: nowrap;
            touch-action: auto;
            margin-left: 12px;
            width: 87%;

            li {
                box-sizing: border-box;
                touch-action: auto;
                height: 40px;
                line-height: 40px;
                margin-right: 20px;
                font-size: 16px;
                color: #333;
            }
        }

        .currentLi {
            color: #fe4f5d;
        }
    }
</style>