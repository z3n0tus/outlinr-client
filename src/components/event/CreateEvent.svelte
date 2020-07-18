<script>
  import { onMount } from 'svelte'
  import { Input, Button, Multiselect, Container } from '../basic'
  import { SearchCharacter } from '../character'
  import { characters } from '../../store'
  import * as api from '../../api'

  let description = ""
  let associatedCharacters = []

  let allCharacters = []

  onMount(() => {
    characters.subscribe(cs => {
      allCharacters = cs.map(c => ({ ...c, value: c.name }))
    })
  })

  function saveChanges() {
    api.saveEntity("Lee", "event", { description, associatedCharacters })
  }

  function getCharacterNameFromId(id) {
    return $characters.find(c => c.id === id).name
  }

  function addAssociatedCharacter(character) {
    associatedCharacters = [...associatedCharacters, character.id]
  }

  function removeAssociatedCharacter(character) {
    associatedCharacters = associatedCharacters.filter(acId => acId !== character.id)
  }
</script>

<main>
  <h1>Create Event</h1>
  <Container>
    <Input
      textarea
      label="* Description"
      bind:value={description}
    />
  </Container>
  <br />
  <Container>
    <Multiselect
      label="Add Associated Characters"
      options={allCharacters}
      selectItem={addAssociatedCharacter}
      deselectItem={removeAssociatedCharacter}
    />
  </Container>
  <br />
  <Button onClick={saveChanges}>Save Event</Button>
</main>

<style>
  main {
    padding: 16px;
  }
</style>

