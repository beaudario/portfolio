import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "../router";
import VueGtagPlugin, { config } from "vue-gtag";

createApp(App)
  .use(VueGtagPlugin, {
    config: { id: "G-SDPQXV8DCZ" },
    router
  })
  .use(router)
  .mount("#app");