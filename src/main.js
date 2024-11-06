import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "../router";
import { config } from "vue-gtag";

createApp(App)
  .use(VueGtag, { config: { id: "G-SDPQXV8DCZ" } }, router)
  .mount("#app");