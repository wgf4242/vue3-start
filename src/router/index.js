import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"

const createRouterTransition = name => {
  return {
    path: `/${name}`,
    component: () => import(`../views/router-transition/${name}.vue`),
    children: [
      { path: "view1", component: import("../views/router-transition/view1.vue") },
      { path: "view2", component: import("../views/router-transition/view2.vue") },
    ],
  }
}
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: () => import(/* webpackChunkName: "about" */ "../views/About.vue") },
  { path: "/data", name: "Data", component: () => import("../views/Data.vue") },
  { path: "/Test", name: "Test", component: () => import("../views/Test.vue") },
  { path: "/RenderView", name: "RenderView", component: () => import("../views/RenderView.vue") },
  { path: "/Communication", name: "Communication", component: () => import("../views/Communication.vue") },
  { path: "/UseJsx", name: "UseJsx", component: () => import("../views/UseJsx.vue") },
  createRouterTransition("router-transition1"),
  createRouterTransition("router-transition2"),
  createRouterTransition("router-transition3"),
  createRouterTransition("router-transition4"),
]

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
