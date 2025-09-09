<script>
  function logout() {
    localStorage.removeItem('auth');
    window.location.hash = '/';
  }
</script>

<div class="text-center">
  <h1>📊 Dashboard</h1>
  <p>Selamat datang di aplikasi Svelte + Bootstrap</p>
  <a href="#/crud" class="btn btn-success m-2">CRUD Page</a>
  <a href="#/list" class="btn btn-info m-2">List Page</a>
  <button class="btn btn-danger m-2" on:click={logout}>Logout</button>
</div>
