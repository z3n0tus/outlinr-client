<script>
  import uuid from 'uuid-v4'
  import { Input, Button } from '../basic'
  import { SearchCharacter } from '../character'
  import { characters } from '../../store'

  let description = ""
  let associatedCharacters = []

  function saveAssociatedCharacters(characters) {
    associatedCharacters = characters
  }

  function saveChanges() {
    saveEvent({ associatedCharacters, description, associatedCharacters, id: uuid() })
  }

  function getCharacterNameFromId(id) {
    return $characters.find(c => c.id === id).name
  }

  function addAssociatedCharacter(id) {
    associatedCharacters = [...associatedCharacters, id]
  }

  function removeAssociatedCharacter(id) {
    associatedCharacters = associatedCharacters.filter(acId => acId !== id)
  }

  export let saveEvent
</script>

<main>
  <Input textarea label="Event Description" bind:value={description} />
  <p>Add Associated Characters</p>
  <div>
    Selected:
    {#each associatedCharacters as character}
      <span class="selected">{getCharacterNameFromId(character)}, </span>
    {/each}
  </div>
  <br />
  <SearchCharacter selectCharacter={addAssociatedCharacter} removeCharacter={removeAssociatedCharacter} />
  <br />
  <Button onClick={saveChanges}>Save Event</Button>
</main>

<style>
  main {
    padding: 16px;
  }
</style>

