import Vue from "vue";
import Router from "vue-router";

import NotFound from "@/components/NotFound.vue";

import Login from "@/views/Login.vue";
import Todo from "@/views/Todo.vue";
import Timer from "@/views/Timer.vue";
import GitSearch from "@/views/GitSearch.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "",
      redirect: "/todo",
      meta: { requiresAuth: true }
    },
    {
      path: "/todo",
      name: "home",
      components: {
        default: Todo
      },
      meta: { requiresAuth: true }
    },
    {
      path: "/timer",
      name: "Timer",
      component: Timer,
      meta: { requiresAuth: true }
    },
    {
      path: "/github-search",
      name: "Git-Search",
      component: GitSearch,
      meta: { requiresAuth: true }
    },

    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
});

export default router;
