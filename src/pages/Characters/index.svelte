<script>
  import { onMount } from 'svelte';
  import { characters, events } from '../../store'
  import * as routerTools from '../../global_tools/router_tools';
  import * as api from '../../api'
 
  const navigateToCharacterScreen = (id) => {
    routerTools.goToCharacterPage(id)
  }
</script>

<main>
  <h1>Characters</h1>
  {#if $characters && $characters.length > 0}
     {#each $characters as character}
        <div on:click={() => navigateToCharacterScreen(character.id)}>
          <img src={character.picture} alt="the character" />
          <h1>{character.name}</h1>
        </div>
      {/each}
  {:else}
    <p>You haven't created any characters yet.</p>
  {/if}
</main>