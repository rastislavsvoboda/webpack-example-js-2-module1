import { createRouter, createWebHistory } from "vue-router";
import Home from "Views/Home.vue";
import EditPersonBasic from "Components/EditPersonBasic";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "Views/About.vue"),
  },
  {
    path: "/person/edit/:id",
    name: "EditPersonBasic",
    component: EditPersonBasic,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
