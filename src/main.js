import { createApp } from "vue";
import ElementPlus from "element-plus";
import zhCN from "element-plus/es/locale/lang/zh-cn.mjs";
import Router from "./router.js";
import App from "./app.vue";
import "./db.js";
import "element-plus/dist/index.css";
import "./styles/tailwind.css";

const app = createApp(App);

app.use(Router);

app.use(ElementPlus, { local: zhCN });

app.mount("#root");
