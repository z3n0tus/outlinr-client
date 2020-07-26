<script>
  import { onMount } from 'svelte'
  import { push } from 'svelte-spa-router'
  import { Container, Input, Multiselect, Button } from '../basic'
  import * as api from '../../api'

  let story = {
    name: '',
    beginning: '',
    end: '',
    associatedSubplots: [],
    associatedCharacters: [],
    themes: '',
  }

  let error = ""
  let owner = "Lee"

  $: {
    if (storyToEdit) {
      story = storyToEdit
    }
  }

  const addAssociatedSubplot = (subplot) => {
    story.associatedSubplots = [...story.associatedSubplots, subplot.id]
  }

  const removeAssociatedSubplot = (subplot) => {
    story.associatedSubplots = story.associatedSubplots.filter(at => at !== subplot.id)
  }

  const addAssociatedCharacter = (character) => {
    story.associatedCharacters = [...story.associatedCharacters, character.id]
  }

  const removeAssociatedCharacter = (character) => {
    story.associatedCharacters = story.associatedCharacters.filter(ac => ac !== character.id)
  }

  const saveStory = () => {
    if (story.name.length > 0) {
      api.saveEntity("Lee", "story", story).then(() => push('/'))
    } else {
      error = "Name is a required field."
    }
  }

  export let storyToEdit, allCharacters = [], allSubplots = []
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
      options={allSubplots.map((s) => ({ ...s, value: s.description }))}
      selectItem={addAssociatedSubplot}
      deselectItem={removeAssociatedSubplot}
    />
  </Container>
  <br />
  <Container>
    <Multiselect
      label="Add Characters"
      options={allCharacters.map(c => ({ ...c, value: c.name }))}
      selectItem={addAssociatedCharacter}
      deselectItem={removeAssociatedCharacter}
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