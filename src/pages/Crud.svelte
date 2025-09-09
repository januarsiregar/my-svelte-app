<script>
  let items = [];
  let newItem = '';
  let editingIndex = null;

  function addItem() {
    if (newItem.trim()) {
      if (editingIndex !== null) {
        items[editingIndex] = newItem;
        editingIndex = null;
      } else {
        items = [...items, newItem];
      }
      newItem = '';
    }
  }

  function editItem(i) {
    newItem = items[i];
    editingIndex = i;
  }

  function deleteItem(i) {
    items = items.filter((_, index) => index !== i);
  }
</script>

<h2>📝 CRUD Page</h2>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Tambah/Edit item..." bind:value={newItem} />
  <button class="btn btn-primary" on:click={addItem}>{editingIndex !== null ? 'Update' : 'Tambah'}</button>
</div>

<ul class="list-group">
  {#each items as item, i}
    <li class="list-group-item d-flex justify-content-between">
      {item}
      <div>
        <button class="btn btn-sm btn-warning me-2" on:click={() => editItem(i)}>Edit</button>
        <button class="btn btn-sm btn-danger" on:click={() => deleteItem(i)}>Hapus</button>
      </div>
    </li>
  {/each}
</ul>
