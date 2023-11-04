<script>
  import ListItem from "$components/ListItem/ListItem.svelte";
  
  //ITEM DETAILS
  const items = [
    { 
      status: "lost", 
      title: 'Jacket', 
      imageUrl: 'path_to_image.jpg', 
      description: 'A warm jacket for winter.' 
    },
  ];

  //DATE FORMATTING
  const currentDate = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const formattedDate = `${daysOfWeek[currentDate.getDay()]}, ${months[currentDate.getMonth()]} ${currentDate.getDate()}`;
</script>

<style>
  .item-container {
      padding: 10px;
      border-radius: 8px;
      margin: 10px 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column; /* Make the card a column layout */
      color: #392E5A; /* Dark blue text color */
      font-family:'Arial', sans-serif;
  }

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

{#each items as item, index}
  <div class="item-container">
    <ListItem
      status={item.status}
      title={item.title}
      imageUrl={item.imageUrl}
      description={item.description}
    />
    <ListItem 
      status={item.status}
      title={item.title}
      imageUrl={item.imageUrl}
      description={item.description}
    />
    <ListItem
      status={item.status}
      title={item.title}
      imageUrl={item.imageUrl}
      description={item.description}
    />
  </div>
{/each}
