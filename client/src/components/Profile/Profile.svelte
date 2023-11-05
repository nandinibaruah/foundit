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
  
  <h1 class="title">UserEmail</h1>
  <p class="date">My Items</p>
  
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
  