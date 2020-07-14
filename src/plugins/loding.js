import Vue from 'vue'
import {
    Button,
    Search,
    Swipe,
    SwipeItem,
    Lazyload,
    Tab,
    Tabs,
    Tabbar,
    TabbarItem,
    NavBar,
    Sidebar,
    SidebarItem
} from 'vant';

Vue.use(Button);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);

Vue.use(Sidebar);
Vue.use(SidebarItem);

Vue.use(Lazyload, {
    lazyComponent: true,
});
