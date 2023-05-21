import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from "@/features/home/Home.routes";
import HomeView from "@/features/home/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    homeRoutes(),
    {
      path: "/idk/:id",
      name: "myBffJill",
      component: HomeView,
      props: (route): { id: number } => ({
        id: Number.parseInt(route.path),
      }),
    },
  ],
});

export default router;
