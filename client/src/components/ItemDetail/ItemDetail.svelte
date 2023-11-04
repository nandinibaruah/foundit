<script>
  import { page } from '$app/stores';
  import Card from '../Card.svelte';
  import FeatureLayout from '../FeatureLayout.svelte';
  let itemId = $page.params.slug;
  export let title;
</script>

<FeatureLayout>
  <Card>
    <h1>{title}</h1>
    <div class="w-full h-0 aspect-w-1 aspect-h-1 rounded-sm">
      <img alt={title} src="https://images.pexels.com/photos/17960588/pexels-photo-17960588/free-photo-of-basketball-hoop-in-the-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
    </div>
  </Card>
</FeatureLayout>