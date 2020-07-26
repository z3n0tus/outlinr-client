<script>
  import { onMount } from 'svelte'
  import { PageContainer, Loading } from '../../components/basic'
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
      title = existingStory.name
    }
  })

  export let params
</script>

<Loading data={[allCharacters, allEvents, allSubplots]}>
  <PageContainer title={title}>
    {#if id === null || editMode}
      <CreateStory {existingStory} {allCharacters} {allSubplots} />
      {:else}
      <ViewStory {existingStory} />
    {/if}
  </PageContainer>  
</Loading>
