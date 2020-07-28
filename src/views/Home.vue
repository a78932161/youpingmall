<template>
    <div class="home">
        <!--        <svg-icon icon-class="qq"/>-->
        <search></search>
        <!--1 A-->
        <top-nav :list="navList" @current="getCurrent"></top-nav>

        <div class="swipeStyle" v-if="navIndex===0">
            <swipe :images="imagesList" :size="{width: '96vw',height: '142px'}" class="wc"></swipe>
            <!--2 B-->
            <!--        <component is="boxWrapper" :boxList="boxList" :areaList="areaList"></component>-->
            <boxWrapper :boxList="boxList"></boxWrapper>
            <!--3 C-->
            <indexArea :areaList="areaList"></indexArea>
            <swipe class="wc" :images="imagesList" :size="{ width: '96vw',height: '96px'}"></swipe>
            <!--4 D-->
            <div v-if="tabId">
                <tabList :tabId="tabId"></tabList>
            </div>
        </div>
        <div class="home-nav-item" v-else>
            <a :href="item1.url" v-for="(item1,index1) in navList[navIndex]['child']" :key="index1"
               class="home-nav-items">
                <img :src="item1.pic_url" class="home-nav-item-img" alt="">
            </a>
        </div>

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
    import topNav from 'components/topNav/index'

    import {getBanner, getTitle, getNav} from "api/dome";

    export default {
        data() {
            return {
                navIndex: 0,
                navList: [],
                imagesList: [],
                boxList: [],
                areaList: [],
                tabId: '',
            }
        },
        components: {
            search,
            swipe,
            boxWrapper,
            indexArea,
            tabList,
            suspended,
            topNav
        },
        mounted() {
            this.getList();
        },
        methods: {
            getList() {
                getNav().then(res => {
                    this.navList = res.data.data.list;
                    this.navList.unshift({name: '首页'});
                });


                getTitle({id: 0}).then(res => {
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
                                this.tabId = Number(item.id);
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
            },
            getCurrent(index) {
                this.navIndex = index;
            }

        }
    }
</script>

<style lang="scss" scoped>
    .home {
        height: 100vh;
        background-color: rgb(245, 245, 245);
    }

    .home-nav-item {
        margin: 0 auto;
        padding: 5px;
        width: 350px;
        background: #fff;
        border-radius: 10px;

        .home-nav-items {
            margin-right: 10px;
            margin-bottom: 10px;
        }

        .home-nav-items:nth-child(4n) {
            margin-right: 0;
        }

        .home-nav-item-img {
            height: 105px;
            width: 79px;
        }
    }

</style>
