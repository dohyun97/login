import { createRouter, createWebHistory } from "vue-router";

import SignInPage from '../views/SignInPage.vue';
import Welcome from '../views/Welcome.vue';
import SignOnPage from '../views/SignOnPage.vue';

const routes = [
  
   
  {
    path: "/login",
    name: "SignOnPage",
    component: SignOnPage,
  },
  
  {
    path:'/signin',
    name:"Signin",
    component:SignInPage,
  },
  {
    path:'/welcome',
    name:"Welcome",
    component:Welcome
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;