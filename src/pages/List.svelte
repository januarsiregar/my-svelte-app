<script>
  let users = [
    { id: 1, name: 'Budi', email: 'budi@mail.com' },
    { id: 2, name: 'Siti', email: 'siti@mail.com' },
    { id: 3, name: 'Andi', email: 'andi@mail.com' }
  ];
</script>

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
