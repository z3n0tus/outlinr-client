<script>
  import { onMount } from 'svelte'

  export let character, backstoryEvents
</script>

<main>
  <section>
    <img src={character.picture} alt="the character" />
    <h1>{character.name || "Create a Character"}</h1>
  </section>
  <section>
    <h2>Backstory Events</h2>
    {#if backstoryEvents}
      {#each backstoryEvents as event}
        <div>
          {event.description}
        </div>
      {/each}
    {:else}
      <p>This character has no backstory events.</p>
    {/if}
  </section>
</main>



