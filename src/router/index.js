import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/HomeView.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => 
      import(/* webpackChunkName: "Home" */ "../views/test.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
