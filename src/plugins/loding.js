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
    SidebarItem,
    Dialog,
    Cell,
    CellGroup,
    Uploader,
    Field,
    RadioGroup,
    Radio,
    Toast

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
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Uploader);
Vue.use(Field);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Toast);


Vue.use(Dialog);
Vue.use(Lazyload, {
    lazyComponent: true,
});
