<script>
  import { onMount } from 'svelte'
  import * as styles from './styles'
  import * as routerTools from '../../global_tools/router_tools'
  import { events } from '../../store'

  let event = {};

  onMount(() => {
    console.log($events)
    event = $events.find(e => e.id === id)
  });

  const goToCharacterPage = (characterId) => {
    routerTools.goToCharacterPage(characterId)
  }

  export let characterId, id;
</script>

<main class={styles.eventPage}>
  <h1>Event</h1>
  <section>
    <p>{event.description}</p>
  </section>
  <h3>Associated Characters</h3>
  <section>
    <p>
      {#each $events as event}
        <p>{event.description}</p>
      {/each}
    </p>
  </section>
  <!-- <h3>Author Notes</h3>
  <section>
    {#each event.notes as note}
      <div class={styles.note}>
        {note}
      </div>
    {/each}
  </section> -->
</main>