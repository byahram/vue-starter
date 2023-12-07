import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";

const routes = [
  {
    // (\\d+) : 숫자만 정규식
    path: "/detail/:id(\\d+)",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author.vue,
      },
      {
        path: "comment",
        component: Comment.vue,
      }
    ],

  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  // {
  //   path: " /:anything(.*)",
  //   component: Home,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
