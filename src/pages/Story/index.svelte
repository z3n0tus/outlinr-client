<script>
  import { onMount } from 'svelte'
  import { PageContainer, Loading, Button } from '../../components/basic'
  import { CreateStory, ViewStory } from '../../components/story'
  import store from '../../store'

  let id = null
  let existingStory = null
  let editMode = false
  let title = "Create New Story"

  let allCharacters = null
  let allEvents = null
  let allSubplots = null

  onMount(async () => {
    if (params) {
      id = params.id
    }

    allCharacters = await store.getCharacters()
    allEvents = await store.getEvents()
    allSubplots = await store.getSubplots()

    if (id) {
      const stories = await store.getStories()
      
      existingStory = stories.find(story => story.id === id)
    }
  })

  $: {
    if (editMode) {
      title = `${existingStory.name} - Editing`
    } else if (!editMode && params && params.id && existingStory) {
      title = existingStory.name
    } else {
      title = 'Create new Story'
    }
  }

  function toggleEditMode() {
    editMode = !editMode
  }

  export let params
</script>

<Loading data={[allCharacters, allEvents, allSubplots]}>
  <PageContainer title={title}>
    {#if id === null || editMode}
      <CreateStory
        {existingStory}
        {allCharacters}
        {allSubplots}
        {toggleEditMode}
      />
      {#if editMode}
        <Button onClick={toggleEditMode}>Cancel Editing</Button>
      {/if}
    {:else}
      <ViewStory
        {existingStory}
        {allSubplots}
        {allCharacters}
        {toggleEditMode}
      />
      <br />
      <Button onClick={toggleEditMode}>Edit</Button>
    {/if}
  </PageContainer>  
</Loading>

