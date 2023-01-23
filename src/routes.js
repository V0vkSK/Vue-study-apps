import { createRouter, createWebHistory } from "vue-router";
import vHomePage from "./Pages/vHomePage";
import vCV from "./Pages/vCV";
import vMoviesList from "./Pages/vMovies/vMoviesList";
import vAuthorsList from "./Pages/vMovies/vAuthorsList";
import vReviews from "./Pages/vMovies/vReviews";
import vSearch from "./Pages/vMovies/vSearch";
import vSearchResult from "./Pages/vMovies/vSearchResult";
import vPizza from "./Pages/vPizza/vPizza.vue";
import vError from "./components/vError";
// import vClock from "./Pages/vClock.vue";
import vClockOnVue from "./Pages/vClockOnVue.vue";
import vNotFound from "./components/vNotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "clock",
      component: vClockOnVue,
    },
    {
      path: "/about",
      name: "about",
      component: vHomePage,
    },
    {
      path: "/error",
      name: "error",
      component: vError,
    },
    {
      path: "/cv",
      name: "cv",
      component: vCV,
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
      path: "/search",
      name: "search",
      component: vSearch,
    },
    {
      path: "/search_res",
      name: "searchResult",
      component: vSearchResult,
    },
    {
      path: "/pizza",
      name: "pizza",
      component: vPizza,
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
