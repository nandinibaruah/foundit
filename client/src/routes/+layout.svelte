<script>
  import Footer from "$components/Footer/Footer.svelte";
  import "../app.css";
</script>

<div class="flex flex-col h-screen align-center justify-between">
  <div class="content bg-slate-300 h-full">
    <slot/>
  </div>
  <Footer/>
</div>

<style>
</style>