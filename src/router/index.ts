import { createRouter, createWebHistory } from "vue-router";
import { homeRoutes } from "@/features/home/Home.routes";
import sprocketRoutes from "@/features/sprockets/routes/Sprockets.routes";
import { errorPageRoutes } from "@/features/common/components/error/ErrorPage.routes";
import UserLogin from "@/features/customers/logIn/UserLogin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    homeRoutes,
    ...sprocketRoutes(),
    {
      path: "/logIn",
      name: "logIn",
      component: UserLogin,
    },
    errorPageRoutes,
  ],
});

export default router;
