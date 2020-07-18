<script>
  import { onMount } from 'svelte'
  import { Button, Input, Container, Multiselect } from '../basic'
  import { CreateEvent } from '../event'
  import { events } from '../../store'
  import * as api from '../../api'

  let name = ''
  let imgURL = ''
  let allEvents = []
  let backstoryEvents = []

  let createEventMode = false

  onMount(() => {
    events.subscribe((es) => {
      allEvents = es.map(e => ({ ...e, value: e.description }))
    })
  })

  const addBackstoryEvent = (event) => {
    backstoryEvents = [...backstoryEvents, event.id]
  }

  const removeBackstoryEvent = (event) => {
    backstoryEvents = backstoryEvents.filter(be => be !== event.id)
  }

  function save() {
    if (name.length >= 0) {
      api.saveEntity("Lee", "character", { backstoryEvents, name, imgURL })
    }
  }

</script>

<main>
  <h1>Create new Character</h1>
  <Container>
    <Input bind:value={name} label="* Name" />
  </Container>
  <br />
  <Container>
    <Input bind:value={imgURL} label="Image URL" />
  </Container>
  <br />
  <Container>
    <Multiselect
      label="Add Backstory Event"
      options={allEvents}
      selectItem={addBackstoryEvent}
      deselectItem={removeBackstoryEvent}
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