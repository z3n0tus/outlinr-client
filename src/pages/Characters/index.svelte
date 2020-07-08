<script>
  import { onMount } from 'svelte';
  import * as styles from './styles';
  import * as routerTools from '../../global_tools/router_tools';
  import * as api from '../../api'

  let characters = [];

  const navigateToCharacterScreen = (id) => {
    routerTools.goToCharacterPage(id);
  }

  onMount(() => {
    characters = api.getAllCharacters("Lee");
  });
</script>

<main class={styles.characters}>
  <h1>Characters</h1>
  {#each characters as character}
    <div class={styles.characterCard} on:click={() => navigateToCharacterScreen(character.id)}>
      <img src={character.picture} alt="the character" />
      <h1>{character.name}</h1>
    </div>
  {/each}
</main>