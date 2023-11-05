<script>
  import Icon from "$components/Icon.svelte";
  import Button from "./Button.svelte";
  import { page } from '$app/stores';

  
  const ROUTES = [
    {
      path: "/",
      iconName: "home"
    },
    {
      path: "/add",
      iconName: "plus"
    },
    {
      path: "/profile",
      iconName: "user"
    },
    {
      path: "/auth",
      iconName: "log-in"
    }
  ]

  let pageRoute = $page.route.id;
  let selected = pageRoute;

</script>

<div class="p-5 flex justify-between shadow-card">
  {#each ROUTES as route (route.path)}
  <Button href={route.path} onClick={() => selected = route.path} selected={selected === route.path}>
    <Icon name={route.iconName}/>
  </Button>
  {/each}
</div>