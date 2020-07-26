<script>
  import { push } from 'svelte-spa-router'

  function navigate() {
    push(link)
  }

  export let headline, link
</script>

<main>
  <h2>{headline}</h2>
  {#if link}
    <div on:click={navigate}>
      &rightarrow;
    </div>
  {/if}
</main>

<style>
  main {
    background-color: #09080d;
    padding: 16px;
    margin-bottom: 16px;
    display: flex;
  }

  h2 {
    font-size: 16px;
    font-weight: normal;
    margin: 0;
  }

  div {
    text-align: right;
    flex: 1;
    cursor: pointer;
  }
</style>
