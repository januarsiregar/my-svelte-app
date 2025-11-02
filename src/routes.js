// src/routes.js - Using proper navigation
import Login from './pages/Login.svelte';
import Dashboard from './pages/Dashboard.svelte';
import Crud from './pages/Crud.svelte';
import List from './pages/List.svelte';
import { isLoggedIn } from './auth.js';

const routes = {
  '/': Login,
  '/login': Login,
  '/dashboard': Dashboard,
  '/crud': Crud,
  '/list': List,
  '*': Login
};

export default routes;