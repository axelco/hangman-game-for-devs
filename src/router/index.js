import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Game from "../views/Game/Game.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/game/:type",
    name: "Game",
    component: Game,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
