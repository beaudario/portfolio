import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "../router";
import VueGtagPlugin from "vue-gtag";

createApp(App)
  .use(router)
  .use(VueGtagPlugin, {
    config: { id: "G-SDPQXV8DCZ" }
  }, router)
  .mount("#app");