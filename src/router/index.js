import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Login from '../views/Login'
import Index from "../views/Index";
import TableComponent from "../components/public/TableComponent";

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
                    path: '/system/Depart',
                    name: 'FormComponent',
                    component: () => import('../components/public/FormComponent')
                },
				{
				    path: '/system/Members',
				    name: 'Members',
				    component: () => import('../components/page/system/Members')
				},
            ]
        }
  ]
})
