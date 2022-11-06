import { createRouter, createWebHistory } from "vue-router";
import vHomePage from "@/Pages/vHomePage.vue";
import vMoviesList from "./Pages/vMovies/vMoviesList";
import vAuthorsList from "./Pages/vMovies/vAuthorsList";
import vReviews from "./Pages/vMovies/vReviews";
import vNotFound from "./components/vNotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: vHomePage,
    },
    {
      path: "/movies",
      name: "movies",
      component: vMoviesList,
    },
    {
      path: "/reviews",
      name: "reviews",
      component: vReviews,
      props: true,
    },
    {
      path: "/authors",
      name: "authors",
      component: vAuthorsList,
      props: true,
    },

    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: vNotFound,
    },
  ],
});

export default router;
