<script>
  import { onMount } from 'svelte';
  import * as styles from './styles';
  import * as routerTools from '../../global_tools/router_tools';

  let character = { };
  let backstoryEvents = [];

  onMount(() => {
    // character = tools.getCharacter(id);
    // backstoryEvents = tools.getAllBackstoryEvents(character.backstoryEventsIds);
  })

  const goToEventPage = (id) => {
    routerTools.goToEventPage(id);
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
    {#each backstoryEvents as event}
      <div on:click={() => goToEventPage(event.id)}>
        {event.description}
      </div>
    {/each}
  </section>
</main>

