<script>
  import { onMount } from 'svelte'

  let isLoading = true

  $: {
    isLoading = data.some(el => el === null)
  }

  export let data = []
</script>

{#if isLoading}
  <p>Loading...</p>
{:else}
  <slot />
{/if}