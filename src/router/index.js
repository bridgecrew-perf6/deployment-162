import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/views/Home.vue";
import deskripsi from "@/views/Deskripsi.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/:title",
    name: "Deskripsi",
    component: deskripsi,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
