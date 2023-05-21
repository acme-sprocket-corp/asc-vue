import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from "@/features/home/Home.routes";
import sprocketRoutes from "@/features/sprockets/routes/Sprockets.routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [homeRoutes(), ...sprocketRoutes()],
});

export default router;
