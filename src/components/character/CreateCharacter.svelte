<script>
  import { onMount } from 'svelte'
  import { Button, Input, Container, Multiselect } from '../basic'
  import { CreateEvent } from '../event'
  import { events } from '../../store'
  import * as api from '../../api'

  const character = {
    name: '',
    backstoryEvents: [],
    imgURL: ''
  }

  const addBackstoryEvent = (event) => {
    character.backstoryEvents = [...character.backstoryEvents, event.id]
  }

  const removeBackstoryEvent = (event) => {
    character.backstoryEvents = character.backstoryEvents.filter(be => be !== event.id)
  }

  function save() {
    if (character.name.length >= 0) {
      api.saveEntity("Lee", "character", character)
    }
  }

  export let allEvents
</script>

<main>
  <Container>
    <Input bind:value={character.name} label="* Name" />
  </Container>
  <br />
  <Container>
    <Input bind:value={character.imgURL} label="Image URL" />
  </Container>
  <br />
  <Container>
    <Multiselect
      label="Add Backstory Event"
      options={allEvents}
      selectItem={addBackstoryEvent}
      deselectItem={removeBackstoryEvent}
      displayKey="description"
      identificationKey="id"
    />
  </Container>
  <br />
  <Button onClick={save}>Save Character</Button>
</main>

<style>
  main {
    padding: 16px;
  }
</style>