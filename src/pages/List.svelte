<script>
  import { goto } from '@mateothegreat/svelte5-router';

  let users = $state([
    { id: 1, name: 'Budi', email: 'budi@mail.com' },
    { id: 2, name: 'Siti', email: 'siti@mail.com' },
    { id: 3, name: 'Andi', email: 'andi@mail.com' }
  ]);

  function goBack() {
    goto('/dashboard');
  }
</script>

<div class="mb-3">
  <button class="btn btn-secondary btn-sm" onclick={goBack}>← Back to Dashboard</button>
</div>

<h2>📋 User List</h2>

<table class="table table-bordered table-striped">
  <thead class="table-dark">
    <tr>
      <th>ID</th>
      <th>Nama</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {#each users as user}
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    {/each}
  </tbody>
</table>
