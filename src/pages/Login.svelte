<script>
  import { goto } from '@mateothegreat/svelte5-router';
  import { isLoggedIn } from '../auth.js';

  let username = $state('');
  let password = $state('');
  let isLoading = $state(false);
  let errorMessage = $state('');

  async function handleLogin() {
    isLoading = true;
    errorMessage = '';

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));

      if (username === 'admin' && password === 'admin') {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('username', username);
        console.log('Login successful, navigating to dashboard');
        goto('/dashboard');
      } else {
        errorMessage = 'Invalid username or password!';
      }
    } catch (error) {
      errorMessage = 'Login failed. Please try again.';
      console.error('Login error:', error);
    } finally {
      isLoading = false;
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Enter' && !isLoading) {
      handleLogin();
    }
  }
</script>

<div class="row justify-content-center">
  <div class="col-md-4">
    <div class="card shadow-sm">
      <div class="card-body">
        <h3 class="text-center mb-4">🔐 Login</h3>
        
        {#if errorMessage}
          <div class="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        {/if}
        
        <form onsubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div class="mb-3">
            <label class="form-label" for="username">Username</label>
            <input
              id="username"
              type="text"
              class="form-control"
              bind:value={username}
              onkeydown={handleKeydown}
              disabled={isLoading}
              placeholder="Enter username"
              required
              autocomplete="username"
            />
          </div>
          <div class="mb-3">
            <label class="form-label" for="password">Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              bind:value={password}
              onkeydown={handleKeydown}
              disabled={isLoading}
              placeholder="Enter password"
              required
              autocomplete="current-password"
            />
          </div>
          <button 
            type="submit"
            class="btn btn-primary w-100" 
            disabled={isLoading || !username.trim() || !password.trim()}
          >
            {#if isLoading}
              <span class="spinner-border spinner-border-sm me-2" role="status"></span>
              Logging in...
            {:else}
              Login
            {/if}
          </button>
        </form>
        
        <div class="mt-3 text-center">
          <small class="text-muted">
            <strong>Demo credentials:</strong><br>
            Username: admin<br>
            Password: admin
          </small>
        </div>
      </div>
    </div>
  </div>
</div>