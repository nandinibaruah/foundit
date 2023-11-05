<script>
  import { page } from '$app/stores';
  import Card from '../Card.svelte';
  import Divider from '../Divider.svelte';
  import FeatureLayout from '../FeatureLayout.svelte';
  let itemId = $page.params.slug;

  let description = "ajslkdflk;ajsdkl;j";
  const itemFromServer = {
    title: "My Favorite Orange Jacket",
    description: "The sun was setting over the horizon, casting a warm golden glow on the tranquil waters.",
    imageUrl: "https://images.pexels.com/photos/887898/pexels-photo-887898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    contact: {
      email: "john@email.com"
    }
  }
</script>

<FeatureLayout>
  <Card>
    <div class="object-cover img-container">
      <img class="rounded-md sm:rounded-sm object-cover" alt={itemFromServer.title} src={itemFromServer.imageUrl}/>
    </div>
    <h1 class="text-2xl font-bold text-blue-900">{itemFromServer.title}</h1>
    {#if itemFromServer.description}
    <p>{itemFromServer.description}</p>
    {/if}
    <Divider/>
    <div class="flex-col items-start w-full space-y-2">
      <h3 class="font-semibold text-md">Found By:</h3>
      <div class="bg-gray-200 p-3 rounded-sm">
        <a href="mailto:{itemFromServer.contact.email}">
          <p class="text-md">{itemFromServer.contact.email}</p>
        </a>
        </div>
      </div>
  </Card>
</FeatureLayout>

<style>
  .img-container {
    height: 100px;
    width: 100px;
  }
</style>