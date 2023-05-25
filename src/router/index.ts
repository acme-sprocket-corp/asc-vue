import { createRouter, createWebHistory } from "vue-router";
import { homeRoutes } from "@/features/home/Home.routes";
import sprocketRoutes from "@/features/sprockets/routes/Sprockets.routes";
import { errorPageRoutes } from "@/common/components/error/ErrorPage.routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [homeRoutes, ...sprocketRoutes(), errorPageRoutes],
});

export default router;
