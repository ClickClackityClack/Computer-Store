import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CusAdd from '../views/CustomerAdd.vue'
import CusView from '../views/CustomerView.vue'
import EmpAdd from '../views/EmployeeAdd.vue'
import EmpView from '../views/EmployeeView.vue'
import CatAdd from '../views/CategoryAdd.vue'
import CatView from '../views/CategoryView.vue'
import SupAdd from '../views/SuppliersAdd.vue'
import SupView from '../views/SupplierView.vue'
import ProAdd from '../views/ProductAdd.vue'
import ProView from '../views/ProductView.vue'
import ShipAdd from '../views/ShipperAdd.vue'
import ShipView from '../views/ShipperView.vue'
import OrderAdd from '../views/OrderAdd.vue'
import OrderView from '../views/OrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/CusAdd',
      name: 'CusAdd',
      component: CusAdd
    },
    {
      path: '/CusView',
      name: 'CusView',
      component: CusView
    },
    {
      path: '/EmpAdd',
      name: 'EmpAdd',
      component: EmpAdd
    },
    {
      path: '/EmpView',
      name: 'EmpView',
      component: EmpView
    },
    {
      path: '/CatAdd',
      name: 'CatAdd',
      component: CatAdd
    },
    {
      path: '/CatView',
      name: 'CatView',
      component: CatView
    },
    {
      path: '/SupAdd',
      name: 'SupAdd',
      component: SupAdd
    },
    {
      path: '/SupView',
      name: 'SupView',
      component: SupView
    },
    {
      path: '/ProAdd',
      name: 'ProAdd',
      component: ProAdd
    },
    {
      path: '/ProView',
      name: 'ProView',
      component: ProView
    },
    {
      path: '/ShipAdd',
      name: 'ShipAdd',
      component: ShipAdd
    },
    {
      path: '/ShipView',
      name: 'ShipView',
      component: ShipView
    },
    {
      path: '/OrderAdd',
      name: 'OrderAdd',
      component: OrderAdd
    },
    {
      path: '/OrderView',
      name: 'OrderView',
      component: OrderView
    }

  ]
})

export default router
