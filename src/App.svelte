<script>
  import Router from 'svelte-spa-router';
  import { push, replace, location } from 'svelte-spa-router';
  import { onMount } from 'svelte';
  import routes from './routes';
  import { isLoggedIn } from './auth.js';

  // Handle route changes
  onMount(() => {
    const unsubscribe = location.subscribe(value => {
      const currentPath = value || '/';

      // Protected routes
      const protectedRoutes = ['/dashboard', '/crud', '/list'];
      const isProtectedRoute = protectedRoutes.includes(currentPath);

      // If user is not logged in and trying to access protected route
      if (!isLoggedIn() && isProtectedRoute) {
        console.log('User not logged in, redirecting to login');
        replace('/login');
      }
      // If user is logged in and on login page, redirect to dashboard
      else if (isLoggedIn() && (currentPath === '/' || currentPath === '/login')) {
        console.log('User is logged in, redirecting to dashboard');
        replace('/dashboard');
      }
    });

    return unsubscribe;
  });
</script>

<div class="container mt-4">
  <Router {routes} />
</div>