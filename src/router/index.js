import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/login.vue";
import Register from "@/views/Register.vue";
import ProductList from "@/views/ProductList.vue";
import Orders from "@/views/Orders.vue";

const routes = [
  { path: "/", component: ProductList, meta: { requiresAuth: true } },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/orders", component: Orders, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Middleware auth
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.meta.requiresAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;

