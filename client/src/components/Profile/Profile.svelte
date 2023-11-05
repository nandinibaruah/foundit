<script>
  import ListItem from "$components/ListItem/ListItem.svelte";
  
  //ITEM DETAILS
  const items = [
      { 
          status: "lost", 
          title: 'Whatever', 
          imageUrl: 'https://images.pexels.com/photos/16776919/pexels-photo-16776919/free-photo-of-blue-motor-scooter-standing-outside-a-beauty-center.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
          description: 'Lost something silly.' 
      },
      { 
          status: "found", 
          title: 'ID Card', 
          imageUrl: 'https://images.pexels.com/photos/18844140/pexels-photo-18844140/free-photo-of-building-of-natwest-bank-in-llandudno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
          description: 'Found an identity. Dm me for it back.' 
      },
  ];
</script>

<style>
  .title {
      font-size: 3em;
      font-weight: bolder;
      color: #4000FF;
      text-align: left;
      margin-bottom: 20px;
      margin-left: 20px;
      margin-top: 20px;
  }

  .myItems {
      font-size: 1.5em;
      font-weight: bold;
      color: #4D485B;
      text-align: left;
      margin-bottom: 10px;
      margin-left: 20px;
  }

  .signout-button {
      color: #7556D1;
      background-color: transparent;
      border: 2px solid #7556D1;
      border-radius: 5px;
      padding: 10px 20px;
      font-size: 1em;
      font-weight: bold;
      cursor: pointer;
      margin-top: 70px;
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: auto;
      display: block;
  }

  .signout-button:hover {
      background-color: #7556D1;
      color: white;
  }
</style>

<h1 class="title">UserEmail</h1>
<p class="myItems">My Items</p>

{#each items as item}
  <div class="p-3 flex-col space-y-4 flex-1">
      <ListItem
          status={item.status}
          title={item.title}
          imageUrl={item.imageUrl}
          description={item.description}
      />
  </div>
{/each}

<button class="signout-button">Sign Out</button>
