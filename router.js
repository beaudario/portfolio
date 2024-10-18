import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Projects from "@/pages/Projects.vue";
import Experiences from "@/pages/Experiences.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/experiences", name: "Experiences", component: Experiences },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router