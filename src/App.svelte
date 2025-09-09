<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import Login from './pages/Login.svelte'

  console.log(Router);

  // jika tidak lolos kondisi, fallback ke login
  const opts = {
    conditionsFailed: () => Login
  };
</script>

<div class="container mt-4">
  <Router {routes} {opts} />
</div>
