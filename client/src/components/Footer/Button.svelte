<script>
  export let href;
</script>

<a href={href} class="w-32 bg-slate-100 hover:bg-slate-200 hover:cursor-pointer p-2 rounded-md flex h-full align-center justify-center">
  <div class="flex mx-auto align-center justify-center h-full">
    <slot/>
  </div>
</a>