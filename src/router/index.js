import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Profile from "@/components/Profile";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/profile/:user_id",
      name: "Profile",
      component: Profile
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ]
});
