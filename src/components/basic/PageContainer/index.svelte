<script>
  import { pop } from 'svelte-spa-router';
  import { Button } from '../Button/index.svelte'

  function back() {
    pop()
  }

  export let title;
</script>

<p on:click={back}>&nbsp;&nbsp;&nbsp;&lAarr; Go back</p>
<main>
  <h3>{title}</h3>
  <slot />
</main>

<style>
  main {
    padding: 16px;
  }

  p {
    color: skyblue;
    cursor: pointer;
  }

  h3 {
    font-weight: normal;
    margin-top: 0;
  }

</style>