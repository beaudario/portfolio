import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Projects from "@/pages/Projects.vue";
import Experiences from "@/pages/Experiences.vue";
import Aboutme from "@/pages/Aboutme.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/experiences", name: "Experiences", component: Experiences },
  { path: "/aboutme", name: "Aboutme", component: Aboutme}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router