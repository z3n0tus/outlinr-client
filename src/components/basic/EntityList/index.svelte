<script>
  import Card from '../Card/index.svelte'
  import Container from '../Container/index.svelte'
  import Title from '../Title/index.svelte'

  export let entityType, entities, headlineKey, identificationKey, label
</script>

<Container>
  <Title>{label}</Title>
  {#if entities.length > 0}
    {#each entities as entity}
      <Card
        headline={entity[headlineKey]}
        link={`/${entityType}/${entity[identificationKey]}`}
      />
    {/each}
  {:else}
    <p>You haven't added any {label.toLowerCase()} yet.</p>
  {/if}
</Container>

<style>
  p {
    color: gray;
  }

  h3 {
    font-weight: normal;
  }
</style>