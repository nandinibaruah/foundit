<script>
  import { onMount } from 'svelte';
  import Items from "../components/Items/Items.svelte";

  onMount(async () => {
    fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      apiData.set(data);
    }).catch(error => {
      console.log(error);
      return [];
    });
});
</script>
<Items/>