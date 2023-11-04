<script>
  import Item from "$components/Item.svelte";
  const items = ["item 1", "item 2", "item 3"];
</script>

<h1>Items List</h1>
<div>
{#each items as item, index}
<Item id={index}/>
{/each}
</div>