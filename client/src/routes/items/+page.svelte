<script>
  import ListItem from "$components/ListItem.svelte";
  const items = [
    { status: 'lost', title: 'Jacket', imageUrl: 'path_to_image.jpg', description: 'A warm jacket for winter.' },
    // Add more items with the same properties
  ];
</script>

<style>
  .item-container {
      padding: 10px;
      border-radius: 8px;
      margin: 10px 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column; /* Make the card a column layout */
      color: #00008b; /* Dark blue text color */
      font-family:'Arial', sans-serif;
  }

  /* ... rest of your styles ... */
</style>


{#each items as item, index}
  <div class="item-container">
    <ListItem
      status={item.status}
      title={item.title}
      imageUrl={item.imageUrl}
      description={item.description}
    />
  </div>
{/each}
