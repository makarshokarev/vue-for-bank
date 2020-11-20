import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from "../views/Register.vue";
import CreateClient from "@/views/CreateClient.vue";
import CreateAcc from "@/views/CreateAcc.vue";
import Deposit from "@/views/Deposit";
import Withdraw from "@/views/Withdraw";
import Transfer from "@/views/Transfer";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/create_client',
    name: 'Create Client',
    component: CreateClient
  },
  {
    path: '/create_acc',
    name: 'Create Account',
    component: CreateAcc
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: Deposit
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: Withdraw
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: Transfer
  }
]

const router = new VueRouter({
  routes
})

export default router
