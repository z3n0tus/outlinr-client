<script>
  import Emoji from 'svelte-emoji'
  import Container from '../Container/index.svelte'
  import Title from '../Title/index.svelte'

  export let label, text
</script>

<Container>
  <Title>{label}</Title>
  <div>
    {#if text}
      {text}
    {:else}
      <Emoji symbol="🤷" label="There's nothing here"/>
    {/if}
  </div>
</Container>

<style>
  div {
    padding: 16px;
    background-color: #09080d;
    white-space: pre-wrap;
  }
</style>
