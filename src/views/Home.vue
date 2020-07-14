<template>
    <div class="home">
        <!--        <svg-icon icon-class="qq"/>-->
        <search></search>
        <!--1 A-->
        <div class="swipeStyle">
            <div class="swipeTop"></div>
            <swipe :images="imagesList" :size="{width: '92vw',height: '142px'}" class="wc swipe"></swipe>
        </div>
        <!--2 B-->
        <!--        <component is="boxWrapper" :boxList="boxList" :areaList="areaList"></component>-->
        <boxWrapper :boxList="boxList"></boxWrapper>
        <!--3 C-->
        <indexArea :areaList="areaList"></indexArea>
        <swipe class="wc" :images="imagesList" :size="{ width: '96vw',height: '96px'}"></swipe>
        <!--4 D-->
        <tabList :tabId="tabId"></tabList>
        <suspended></suspended>
    </div>
</template>

<script>
    import search from 'components/search'
    import swipe from 'components/swipe'
    import boxWrapper from 'components/boxWrapper/index'
    import indexArea from 'components/area/index'
    import tabList from 'components/tabList/index'
    import suspended from 'components/suspended/index'

    import {getBanner, getTitle} from "api/dome";

    export default {
        data() {
            return {
                imagesList: [],
                boxList: [],
                areaList: [],
                tabId: 0,
            }
        },
        components: {
            search,
            swipe,
            boxWrapper,
            indexArea,
            tabList,
            suspended
        },
        mounted() {
            this.getList();
        },
        methods: {
            getList() {
                getTitle({id:0}).then(res => {
                    console.log(res.data.data.block);
                    const {block} = res.data.data;
                    block.forEach((item) => {
                        console.log(item);
                        switch (item.type) {
                            case "1":
                                this.getSwipe(item.id);
                                break;
                            case "2":
                                this.getBoxList(item.id);
                                break;
                            case "3":
                                this.getAreaList(item.id);
                                break;
                            case "4":
                                this.tabId = item.id;
                                break;
                        }
                    })
                })
            },

            getSwipe(id) {
                getBanner({type: id}).then(res => {
                    console.log(res.data.data.list);
                    this.imagesList = res.data.data.list;
                });
            },
            getBoxList(id) {
                getBanner({type: id}).then(res => {
                    this.boxList = res.data.data.list;
                })
            },
            getAreaList(id) {
                getBanner({type: id}).then(res => {
                    this.areaList = res.data.data.list;
                })
            }

        }
    }
</script>

<style lang="scss" scoped>
    .home {
        background-color: rgb(245, 245, 245);
    }

    .swipeStyle {
        position: relative;
        height: 150px;

        .swipeTop {
            height: 30px;
            background-color: rgb(252, 71, 86);
        }

        .swipe {
            position: absolute;
            left: 0;
            top: 6px;
        }
    }
</style>
