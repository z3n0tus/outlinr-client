<script>
  import { characters } from '../../store'
  import { Input, Button } from '../basic'

  let filterTerm = ""
  let filteredCharacters = $characters
  let selectedCharacters = []

  function toggleSelectCharacter(id) {
    if (selectedCharacters.includes(id)) {
      selectedCharacters = selectedCharacters.filter(scId => scId !== id)
      removeCharacter(id)
      return;
    }

    selectedCharacters = [...selectedCharacters, id]
    selectCharacter(id)
  }

  function save() {
    saveSelection(selectedCharacters)
  }

  $: {
    if (filterTerm.length > 0) {
      filteredCharacters = $characters.filter(c => c.name.toLowerCase().includes(filterTerm.toLowerCase()))
    } else {
      filteredCharacters = $characters
    }
  }

  export let selectCharacter, removeCharacter
</script>

<div class="associated-characters">
  <Input label="Filter" bind:value={filterTerm} />
  <div class="character-list">
    {#each filteredCharacters as character}
      <p class:selected={selectedCharacters.includes(character.id)} class="character" on:click={() => toggleSelectCharacter(character.id)}>
        {character.name}
      </p>
    {/each}
  </div>
</div>

<style>
  .associated-characters {
    background-color: black;
    padding: 16px;
  }

  .selected {
    color: yellow;
  }

  .character:hover{
    cursor:pointer;
  }

  .character-list {
    background-color: #001;
    padding: 8px;
    overflow-y: scroll;
    height: 200px;
  }
</style>