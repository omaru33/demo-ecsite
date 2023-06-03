import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SuccessPage from "../views/SuccessPage.vue";
import ErrorPage from "../views/ErrorPage.vue";
import CartPage from "../views/CartPage.vue";

import productPage from "../views/products/productPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/success",
    name: "Success",
    component: SuccessPage,
  },
  {
    path: "/error",
    name: "Error",
    component: ErrorPage,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPage,
  },
 
  {
    path: '/product/:id',
    name: 'Product',
    component: productPage,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
