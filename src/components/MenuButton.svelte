<script lang="ts">
  import { menuOpen } from "../stores/menuOpen.ts";
</script>

<button
  aria-expanded={$menuOpen}
  on:click={() => menuOpen.set(!$menuOpen)}
  aria-label={$menuOpen ? "Close menu" : "Open menu"}
  class="block lg:hidden z-20"
>
  {#if !$menuOpen}
    <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg"
      ><g fill="#FFF" fill-rule="evenodd"
        ><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" /></g
      ></svg
    >
  {:else}
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
        fill="#FFF"
        fill-rule="evenodd"
      /></svg
    >
  {/if}
</button>
