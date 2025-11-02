<script>
  import { onMount } from 'svelte';
  import { goto } from '@mateothegreat/svelte5-router';

  let username = $state('Admin');
  let isLoggingOut = $state(false);

  onMount(() => {
    // Get username from localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      username = storedUsername;
    }
  });

  async function logout() {
    if (!confirm('Are you sure you want to logout?')) {
      return;
    }

    isLoggingOut = true;

    try {
      // Simulate logout delay
      await new Promise(resolve => setTimeout(resolve, 300));

      localStorage.removeItem('auth');
      localStorage.removeItem('username');
      console.log('Logout successful, redirecting to login');
      goto('/login');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      isLoggingOut = false;
    }
  }

  function navigateTo(route) {
    console.log(`Navigating to: ${route}`);
    goto(route);
  }
</script>

<div class="text-center">
  <h1>📊 Dashboard</h1>
  <p class="lead">Welcome back, <strong>{username}</strong>! 👋</p>
  <p class="text-muted">Choose an option below to continue:</p>
  
  <div class="row justify-content-center mt-4">
    <div class="col-md-10">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Main Menu</h5>
          <div class="row g-3">
            <div class="col-md-4">
              <div class="card h-100 border-success">
                <div class="card-body text-center">
                  <h1 class="display-4">📝</h1>
                  <h6 class="card-title">CRUD Operations</h6>
                  <p class="card-text small">Create, Read, Update, Delete items</p>
                  <button
                    class="btn btn-success"
                    onclick={() => navigateTo('/crud')}
                  >
                    Go to CRUD
                  </button>
                </div>
              </div>
            </div>
            
            <div class="col-md-4">
              <div class="card h-100 border-info">
                <div class="card-body text-center">
                  <h1 class="display-4">📋</h1>
                  <h6 class="card-title">User List</h6>
                  <p class="card-text small">View and manage user data</p>
                  <button
                    class="btn btn-info"
                    onclick={() => navigateTo('/list')}
                  >
                    View List
                  </button>
                </div>
              </div>
            </div>
            
            <div class="col-md-4">
              <div class="card h-100 border-danger">
                <div class="card-body text-center">
                  <h1 class="display-4">🚪</h1>
                  <h6 class="card-title">Logout</h6>
                  <p class="card-text small">Sign out of your account</p>
                  <button
                    class="btn btn-danger"
                    onclick={logout}
                    disabled={isLoggingOut}
                  >
                    {#if isLoggingOut}
                      <span class="spinner-border spinner-border-sm me-2"></span>
                      Logging out...
                    {:else}
                      Logout
                    {/if}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Quick navigation breadcrumb -->
  <nav class="mt-4">
    <ol class="breadcrumb justify-content-center">
      <li class="breadcrumb-item active">Dashboard</li>
    </ol>
  </nav>
</div>