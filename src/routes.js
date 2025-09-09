// @ts-ignore
import Login from './pages/Login.svelte';
// @ts-ignore
import Dashboard from './pages/Dashboard.svelte';
// @ts-ignore
import Crud from './pages/Crud.svelte';
// @ts-ignore
import List from './pages/List.svelte'
import { isLoggedIn } from './auth.js'

console.log({ Login, Dashboard, Crud, List });

export default {
  '/': Login,
  '/dashboard': {
    component: Dashboard,
    conditions: [isLoggedIn]
  },
  '/crud': {
    component: Crud,
    conditions: [isLoggedIn]
  },
  '/list': {
    component: List,
    conditions: [isLoggedIn]
  },
}
