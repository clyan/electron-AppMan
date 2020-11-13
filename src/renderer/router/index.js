import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: require("@/views/Home").default,
      children: [
        {
          path: "/",
          name: "Main",
          component: require("@/components/Main").default
        },
        {
          path: "/AddProgress",
          name: "AddProgress",
          component: require("@/components/AddProgress").default
        }
      ]
    },

    {
      path: "*",
      redirect: "/"
    }
  ]
});
