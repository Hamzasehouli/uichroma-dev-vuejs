import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/TheContact.vue"),
  },
  {
    path: "/edit-color/:cl",
    name: "Edit",
    component: () => import("../views/EditColor.vue"),
    props: true,
  },
  {
    path: "/support",
    name: "Support",
    component: () => import("../views/TheSupport.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TheInfo.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/TheBlog.vue"),
  },
  {
    path: "/article/:topic",
    name: "article",
    component: () => import("../components/ArticleDetail.vue"),
    props: true,
  },

  {
    path: "/:notFound(.*)",
    component: () => import("../components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(_, _1, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
