<script>
  import { onMount } from 'svelte'
  import * as styles from './styles'
  import * as routerTools from '../../global_tools/router_tools'
  import * as api from '../../api'
  import { characters, events } from '../../store'

  let editMode = false
  let character = { };
  let backstoryEvents = [];

  onMount(() => {
    character = $characters.find(c => c.id === id)
    backstoryEvents = $events.filter(e => character.backstoryEvents.includes(e.id))
  })

  const goToEventPage = (eventId) => {
    routerTools.goToEventPage(id, eventId);
  }

  export let id;
</script>

<main class={styles.characterPage}>
  <section class={styles.characterPageHeader}>
    <img src={character.picture} alt="the character" />
    <h1>{character.name}</h1>
  </section>
  <section class={styles.backstoryEvents}>
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

