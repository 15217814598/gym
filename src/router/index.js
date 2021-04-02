import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Login from '../views/Login'
import Index from "../views/Index";

Vue.use(Router)
// Vue.use(axios)
Vue.prototype.$http = axios;
Vue.config.productionTip = false

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/Index',
            name: 'Index',
            component: Index,
            meta: {
                requireAuth: true
            },
            children: [
				{
				    path: '/system/Members',
				    name: 'Members',
				    component: () => import('../components/page/system/Members')
				},
                {
				    path: '/system/User',
				    name: 'User',
				    component: () => import('../components/page/system/User.vue')
				},
                {
				    path: '/system/Employee',
				    name: 'Employee',
				    component: () => import('../components/page/system/Employee.vue')
				},
                {
				    path: '/system/Role',
				    name: 'Role',
				    component: () => import('../components/page/system/Role.vue')
				},
                {
				    path: '/equipment/Equipment',
				    name: 'Equipment',
				    component: () => import('../components/page/equipment/Equipment.vue')
				},
            ]
        }
  ]
})
