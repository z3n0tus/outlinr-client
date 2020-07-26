<script>
  import { onMount } from 'svelte'
  import { Container, Input, Multiselect, SingleSelect, Button } from '../basic'
  import { characters, events } from '../../store'
  import * as api from '../../api'

  let error = ""

  let description = ""
  let beginning = ""
  let end = ""
  let mainCharacter = ""
  let associatedEvents = []
  let secondaryCharacters = []
  let themes = ""
  let owner = "Lee"
  let allCharacters = []
  let allEvents = []

  onMount(() => {
    characters.subscribe((cs) => {
      allCharacters = cs.map(c => ({ ...c, value: c.name }))
    })

    events.subscribe((e) => {
      allEvents = e.map(event => ({ ...event, value: event.description }))
    })
  })

  const addAssociatedEvent = (event) => {
    associatedEvents = [...associatedEvents, event.id]
  }

  const removeAssociatedEvent = (event) => {
    associatedEvent = associatedEvent.filter(ae => ae !== event.id)
  }

  const addAssociatedCharacter = (character) => {
    secondaryCharacters = [...secondaryCharacters, character.id]
  }

  const removeAssociatedCharacter = (character) => {
    secondaryCharacters = secondaryCharacters.filter(ac => ac !== character.id)
  }

  const setMainCharacter = (character) => {
    mainCharacter = character.id
  }

  const saveSubplot = () => {
    if (description.length > 0) {
      api.saveEntity("Lee", "subplot", {
        description,
        beginning,
        end,
        themes: themes.split(','),
        secondaryCharacters,
        events: associatedEvents,
        character: mainCharacter,
      })
    } else {
      error = "Description is a required field."
    }
  }
</script>

<main>
  {#if error}
    <p class="error">{error}</p>
  {/if}
  <Container>
    <Input
      label="* Description"
      bind:value={description}
      textarea
    />
  </Container>
  <br />
  <Container>
    <SingleSelect
      label="Main Character"
      bind:value={mainCharacter}
      placeholder="Enter the main character associated with this subplot.",
      options={allCharacters}
      selectItem={setMainCharacter}
    />
  </Container>
  <br />
  <Container>
    <Input
      label="Beginning"
      placeholder="Give a brief overview of your subplot's beginning."
      bind:value={beginning}
      textarea
    />
  </Container>
  <br />
  <Container>
    <Input
      label="End"
      placeholder="Give a brief overview of your subplot's ending."
      bind:value={end}
      textarea
    />
  </Container>
  <br />
  <Container>
    <Multiselect
      label="Add Events"
      options={allEvents}
      selectItem={addAssociatedEvent}
      deselectItem={removeAssociatedEvent}
    />
  </Container>
  <br />
  <Container>
    <Multiselect
      label="Add Secondary Characters"
      options={allCharacters}
      selectItem={addAssociatedCharacter}
      deselectItem={removeAssociatedCharacter}
    />
  </Container>
  <br />
  <Container>
    <Input
      label="Themes"
      bind:value={themes}
      placeholder="Give a list of your subplot's themes."
    />
  </Container>
  <br />
  <Button onClick={saveSubplot}>
    Save Subplot
  </Button>
</main>

<style>
  main {
    padding: 8px;
  }
  .error {
    color: salmon;
    padding: 8px;
  }
</style>