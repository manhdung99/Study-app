import { createApp } from 'vue'
import App from './App.vue'
import Antd from "ant-design-vue";
import router from './router';
import "ant-design-vue/dist/antd.css";
import store from './store';
import './assets/main.css'
import VueClickAway from "vue3-click-away";

const app = createApp(App);

app.use(VueClickAway)
app.use(store)
app.use(router);
app.use(Antd).mount("#app");
