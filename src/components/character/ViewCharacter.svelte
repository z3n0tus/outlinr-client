<script>
  import { onMount } from 'svelte'
  import * as routerTools from '../../global_tools/router_tools'

  const goToEventPage = (eventId) => {
    routerTools.goToEventPage(id, eventId);
  }

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
        <div on:click={() => goToEventPage(event.id)}>
          {event.description}
        </div>
      {/each}
    {:else}
      <p>This character has no backstory events.</p>
    {/if}
  </section>
</main>



