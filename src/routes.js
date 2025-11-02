// src/routes.js - Svelte 5 Router configuration
import Login from './pages/Login.svelte';
import Dashboard from './pages/Dashboard.svelte';
import Crud from './pages/Crud.svelte';
import List from './pages/List.svelte';
import { isLoggedIn } from './auth.js';

// Route guard untuk protected routes
function requireAuth() {
  if (!isLoggedIn()) {
    console.log('User not logged in, redirecting to login');
    return { redirect: '/login' };
  }
  return true;
}

// Route guard untuk login page (redirect ke dashboard jika sudah login)
function redirectIfAuthenticated() {
  if (isLoggedIn()) {
    console.log('User already logged in, redirecting to dashboard');
    return { redirect: '/dashboard' };
  }
  return true;
}

export const routes = [
  {
    path: '/',
    component: Login,
    beforeEnter: redirectIfAuthenticated
  },
  {
    path: '/login',
    component: Login,
    beforeEnter: redirectIfAuthenticated
  },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: requireAuth
  },
  {
    path: '/crud',
    component: Crud,
    beforeEnter: requireAuth
  },
  {
    path: '/list',
    component: List,
    beforeEnter: requireAuth
  },
];