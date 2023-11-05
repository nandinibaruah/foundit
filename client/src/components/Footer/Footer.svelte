<script>
  import Icon from "$components/Icon.svelte";
import Button from "./Button.svelte";
</script>
<div class="p-5 flex justify-between shadow-card">
  <Button href="/">
    <Icon name="home"/>
  </Button>
  <Button href="/add">
    <Icon name="plus"/>
  </Button>
  <Button href="/profile">
    <Icon name="user"/>
  </Button>
  <Button href="/auth">
    <Icon name="auth"/>
  </Button>
</div>