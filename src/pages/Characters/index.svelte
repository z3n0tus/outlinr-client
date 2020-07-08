<script>
  import { onMount } from 'svelte';
  import { characters, events } from '../../store'
  import * as styles from './styles';
  import * as routerTools from '../../global_tools/router_tools';
  import * as api from '../../api'

  onMount(async () => {
    const charactersResponse = await api.getEntities('Lee', 'character')
    const eventsResponse = await api.getEntities('Lee', 'event')

    characters.setCharacters(charactersResponse)
    events.setEvents(eventsResponse)
  })
 
  const navigateToCharacterScreen = (id) => {
    routerTools.goToCharacterPage(id)
  }
</script>

<main class={styles.characters}>
  <h1>Characters</h1>
  {#if $characters && $characters.length > 0}
     {#each $characters as character}
        <div class={styles.characterCard} on:click={() => navigateToCharacterScreen(character.id)}>
          <img src={character.picture} alt="the character" />
          <h1>{character.name}</h1>
        </div>
      {/each}
  {:else}
    <p>You haven't created any characters yet.</p>
  {/if}
</main>