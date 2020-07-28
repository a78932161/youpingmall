<template>
    <div class="market">
        <navBar :title="title"></navBar>
        <component :is="item.name"
                   :swipeList="item.list"
                   :boxList="item.list"
                   :areaList="item.list"
                   :pid="pid"
                   :key="index"
                   v-for="(item,index) in componentList"
        ></component>
    </div>
</template>

<script>
    import navBar from 'components/navBar/index'
    import swipe from 'components/swipe/index'
    import marketGoods from 'components/marketGoods/index'
    import marketSwipe from 'components/marketSwipe/index'
    import boxWrapper from 'components/boxWrapper/index'
    import indexArea from 'components/area/index'
    import {getBanner, asyncGetBanner, getTitle} from "api/dome";

    export default {
        inject: ['reload'],
        data() {
            return {
                title: '',
                pid: '',
                componentList: [],
                blockLength: 0,
            }
        },

        components: {
            navBar,
            swipe,
            marketGoods,
            marketSwipe,
            boxWrapper,
            indexArea
        },
        methods: {
            getList(id) {
                getTitle({id: id}).then(res => {
                    this.title = res.data.data.info.title;
                    const {block} = res.data.data;
                    this.blockLength = block.length;
                    block.forEach((item, index) => {
                        switch (item.type) {
                            case "1":
                                this.getAll(item.id, 'marketSwipe', index);
                                break;
                            case "2":
                                this.getAll(item.id, 'boxWrapper', index);
                                break;
                            case "3":
                                this.getAll(item.id, 'indexArea', index);
                                break;
                            case "4":
                                this.getAll(item.id, 'marketGoods', index);
                                this.pid = item.id;
                                break;
                        }
                    });
                })
            },

            async getAll(id, name, index) {
                let data = (await asyncGetBanner({type: id})).data.data.list;
                if (data) {
                    console.log(data);
                    this.$set(this.componentList, index, {name: name, list: data});
                }
                // this.componentList.push({name: name, list: data})
                // this.$set(this.componentList, index, {name: name, list: data});
                //console.log(this.componentList);
            },

        },

        mounted() {
            if (this.$route.query.id) {
                this.getList(this.$route.query.id);
            }
        },

        beforeRouteUpdate(to, from, next) {
            if (to.fullPath !== from.fullPath) {
                next()
                this.getList(this.$route.query.id);
                this.reload();
            }
        },

    }
</script>

<style lang="scss" scoped>
    .market {

    }
</style>