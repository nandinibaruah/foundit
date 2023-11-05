<script>
  import ListItem from "$components/ListItem/ListItem.svelte";
  import { onMount } from 'svelte';

  //ITEM DETAILS
  let items = []

  onMount(async () => {
  fetch("http://localhost:3000/items")
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      items = data
      //apiData.set(data);
    }).catch(error => {
      console.log(error);
      return [];
    });
  })

  //DATE FORMATTING
  const currentDate = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const formattedDate = `${daysOfWeek[currentDate.getDay()]}, ${months[currentDate.getMonth()]} ${currentDate.getDate()}`;
</script>

<style>

  .title{
    font-size: 3em;
    font-weight:bolder;
    color:#4000FF;
    text-align: left;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-top: 20px;
  }

  .date{
    font-size: 1.5em;
    font-weight: bold;
    color: #4D485B;
    text-align: left;
    margin-bottom: 10px;
    margin-left: 20px;
  }
</style>

<h1 class="title">Lost Items</h1>
<p class="date">{formattedDate}</p>

{#each items as item}
  <div class="p-3 flex-col space-y-4 flex-1">
    <ListItem
      status={item.status ? "found" : "lost"}
      title={item.title}
      imageUrl={item.imageUrl}
      description={item.description}
    />
  </div>
{/each}
