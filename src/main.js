import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import i18n from "./i18n";
import "@/style/main.scss";
createApp(App).use(i18n).use(store).mount("#app");
