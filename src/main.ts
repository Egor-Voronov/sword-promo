import { createApp } from "vue";
import App from "./App.vue";
import i18n from "@/utils/i18n";
import { MotionPlugin } from "@vueuse/motion";

createApp(App).use(MotionPlugin).use(i18n).mount("#app");
