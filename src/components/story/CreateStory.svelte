<script>
  import { onMount } from 'svelte'
  import { Container, Input, Multiselect, Button } from '../basic'
  import { characters, subplots } from '../../store'
  import * as api from '../../api'

  let error = ""

  let name = ""
  let beginning = ""
  let end = ""
  let associatedThreads = []
  let associatedCharacters = []
  let themes = []
  let owner = "Lee"
  let allCharacters = []
  let allSubplots = []

  onMount(() => {
    characters.subscribe((cs) => {
      allCharacters = cs.map(c => ({ ...c, value: c.name }))
    })

    subplots.subscribe((ss) => {
      allSubplots = ss.map(s => ({ ...s, value: s.description }))
    })
  })

  const addAssociatedThread = (thread) => {
    associatedThreads = [...associatedThreads, thread.id]
  }

  const removeAssociatedThread = (thread) => {
    associatedThreads = associatedThreads.filter(at => at !== thread.id)
  }

  const addAssociatedCharacter = (character) => {
    associatedCharacters = [...associatedCharacters, character.id]
  }

  const removeAssociatedCharacter = (character) => {
    associatedCharacters = associatedCharacters.filter(ac => ac !== character.id)
  }

  const saveStory = () => {
    if (name.length > 0) {
      api.saveEntity("Lee", "story", {
        name,
        beginning,
        end,
        themes,
        characters: associatedCharacters,
        subplots: associatedThreads,
      })
    } else {
      error = "Name is a required field."
    }
  }
</script>

<main>
  {#if error}
    <p class="error">{error}</p>
  {/if}
  <h1>Create Story</h1>
  <Container>
    <Input
      label="* Name"
      bind:value={name}
    />
  </Container>
  <br />
  <Container>
    <Input
      label="Beginning"
      placeholder="Give a brief overview of your story's beginning."
      bind:value={beginning}
      textarea
    />
  </Container>
  <br />
  <Container>
    <Input
      label="End"
      placeholder="Give a brief overview of your story's ending."
      bind:value={end}
      textarea
    />
  </Container>
  <br />
  <Container>
    <Multiselect
      label="Add Threads"
      options={allSubplots}
      selectItem={addAssociatedThread}
      deselectItem={removeAssociatedThread}
    />
  </Container>
  <br />
  <Container>
    <Multiselect
      label="Add Characters"
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
      placeholder="Give a list of your story's themes."
    />
  </Container>
  <br />
  <Button onClick={saveStory}>
    Save Story
  </Button>
</main>

<style>
  main {
    padding: 8px;
  }

  h1 {
    margin-left: 20px;
    font-weight: normal;
  }

  .error {
    color: salmon;
    padding: 8px;
  }
</style>