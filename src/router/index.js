import Vue from 'vue'
import VueRouter from 'vue-router'
import Appointments from '../views/Appointments.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Appointments',
    component: Appointments
  },
  {
    path: '/make-appointments',
    name: 'MakeAppointments',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MakeAppointments.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
