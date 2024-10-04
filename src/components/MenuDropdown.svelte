<script lang="ts">
  import { onMount } from "svelte";
  import { menuOpen } from "../stores/menuOpen.ts";

  let mounted = false;
  $: display = $menuOpen ? "flex" : "hidden";

  onMount(() => {
    mounted = true;
    return () => {
      mounted = false;
    };
  });

  $: {
    if (mounted && typeof document !== undefined)
      document.body.style.overflow = $menuOpen ? "hidden" : "auto";
  }
</script>

<div
  class="fixed inset-0 w-full h-full bg-black z-10 items-start p-6 flex-col justify-center gap-6 lg:hidden {display}"
>
  <a href="/">About</a>
  <a href="/">Careers</a>
  <a href="/">Events</a>
  <a href="/">Products</a>
  <a href="/">Support</a>
</div>

<style>
  a {
    @apply font-josefin-sans text-2xl font-light uppercase text-white;
  }
</style>
