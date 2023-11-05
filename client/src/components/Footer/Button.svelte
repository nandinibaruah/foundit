<script>

  
  export let href;
  export let selected = false;
  export let onClick = undefined;
</script>

<a on:click={onClick} href={href} class="w-32 {selected && "bg-slate-100"} hover:bg-slate-200 hover:cursor-pointer p-2 rounded-md flex h-full align-center justify-center">
  <div class="flex mx-auto align-center justify-center h-full">
    <slot/>
  </div>
</a>