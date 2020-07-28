<script>
  import { onMount } from 'svelte'
  import { push } from 'svelte-spa-router'
  import { Container, Input, Multiselect, Button } from '../basic'
  import * as api from '../../api'

  let story = {
    name: '',
    beginning: '',
    end: '',
    subplots: [],
    characters: [],
    themes: '',
  }

  let error = ""
  let owner = "Lee"

  $: {
    if (existingStory) {
      story = existingStory
    }
  }

  const addSubplot = (subplot) => {
    story.subplots = [...story.subplots || [], subplot.id]
  }

  const removeSubplot = (subplot) => {
    story.subplots = story.subplots.filter(at => at !== subplot.id)
  }

  const addCharacter = (character) => {
    story.characters = [...story.characters || [], character.id]
  }

  const removeCharacter = (character) => {
    story.characters = story.characters.filter(ac => ac !== character.id)
  }

  const saveStory = () => {
    if (story.name.length > 0) {
      api.saveEntity("Lee", "story", story).then(() => push('/'))
    } else {
      error = "Name is a required field."
    }
  }

  export let existingStory, allCharacters = [], allSubplots = []
</script>

<main>
  {#if error}
    <p class="error">{error}</p>
  {/if}
  <Container>
    <Input
      label="* Name"
      bind:value={story.name}
    />
  </Container>
  <br />
  <Container>
    <Input
      label="Beginning"
      placeholder="Give a brief overview of your story's beginning."
      bind:value={story.beginning}
      textarea
    />
  </Container>
  <br />
  <Container>
    <Input
      label="End"
      placeholder="Give a brief overview of your story's ending."
      bind:value={story.end}
      textarea
    />
  </Container>
  <br />
  <Container>
    <Multiselect
      label="Add Subplot"
      options={allSubplots}
      selectItem={addSubplot}
      deselectItem={removeSubplot}
      displayKey="description"
      identificationKey="id"
      alreadySelected={story.subplots}
    />
  </Container>
  <br />
  <Container>
    <Multiselect
      label="Add Characters"
      options={allCharacters}
      selectItem={addCharacter}
      deselectItem={removeCharacter}
      displayKey="name"
      identificationKey="id"
      alreadySelected={story.characters}
    />
  </Container>
  <br />
  <Container>
    <Input
      label="Themes"
      bind:value={story.themes}
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

  .error {
    color: salmon;
    padding: 8px;
  }
</style>