<script>
  import { onMount } from 'svelte';
  import * as styles from './styles';
  import * as routerTools from '../../global_tools/router_tools';

  let event = { notes: [] };
  let characters = [];

  onMount(() => {
    // event = tools.getEvent(id);
    // characters = tools.getAssociatedCharactersByIds(event.associatedCharactersIds)
  });

  const goToCharacterPage = (characterId) => {
    routerTools.goToCharacterPage(characterId);
  }

  export let id;
</script>

<main class={styles.eventPage}>
  <h1>Event</h1>
  <section>
    <p>{event.description}</p>
  </section>
  <h3>Associated Characters</h3>
  <section>
    <p>
      {#each characters as character}
        <span class={styles.characterLink} on:click={() => goToCharacterPage(character.id)}>
          {character.name}
        </span>
        &nbsp;&nbsp;
      {/each}
    </p>
  </section>
  <h3>Author Notes</h3>
  <section>
    {#each event.notes as note}
      <div class={styles.note}>
        {note}
      </div>
    {/each}
  </section>
</main>