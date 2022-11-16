import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/pages/Login.vue";
import Signup from "../components/pages/Signup.vue";
import Home from "../view/Home.vue";
const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Đặt tour du lịch giá rẻ, nhanh chóng | Moiz Travel",
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      title: "Đăng nhập",
    },
  },
  {
    path: "/signup",
    component: Signup,
    meta: {
      title: "Đăng ký",
    },
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
