<script>
  let username = '';
  let password = '';

  function handleLogin() {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('auth', 'true');
      window.location.hash = '/dashboard';
    } else {
      alert('Login gagal! Username & password salah.');
    }
  }
</script>

<div class="row justify-content-center">
  <div class="col-md-4">
    <div class="card shadow-sm">
      <div class="card-body">
        <h3 class="text-center mb-4">Login</h3>
        <div class="mb-3">
          
          <label class="form-label" for="username">Username</label>
          <input  type="text" class="form-control" bind:value={username} />
        </div>
        <div class="mb-3">
          
          <label class="form-label" for="password">Password</label>
          <input type="password" class="form-control" bind:value={password} />
        </div>
        <button class="btn btn-primary w-100" on:click={handleLogin}>Login</button>
      </div>
    </div>
  </div>
</div>
