<script>
  import { onMount } from 'svelte';
  import { characters, events } from '../../store'
  import * as api from '../../api'
</script>

<main>
  <h1>Characters</h1>
  {#if $characters && $characters.length > 0}
     {#each $characters as character}
        <div>
          <img src={character.picture} alt="the character" />
          <h1>{character.name}</h1>
        </div>
      {/each}
  {:else}
    <p>You haven't created any characters yet.</p>
  {/if}
</main>