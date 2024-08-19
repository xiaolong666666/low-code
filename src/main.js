import { createApp } from "vue";
import Router from "./router.js";
import App from "./app.vue";
import "./db.js";
import "element-plus/dist/index.css";
import "./styles/tailwind.css";

const app = createApp(App);

app.use(Router);

app.mount("#root");
