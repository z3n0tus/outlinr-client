<script>
  import { onMount } from 'svelte'
  import { PageContainer, Loading, Button } from '../../components/basic'
  import { CreateCharacter, ViewCharacter } from '../../components/character'
  import store from '../../store'

  let id = null
  let existingCharacter = null
  let editMode = false
  let title = "Create New Character"

  let allEvents = null

  onMount(async () => {
    if (params) {
      id = params.id
    }

    allEvents = await store.getEvents()

    if (id) {
      const characters = await store.getCharacters()
      
      existingCharacter = characters.find(character => character.id === id)
    }
  })

  $: {
    if (editMode) {
      title = `${existingCharacter.name} - Editing`
    } else if (!editMode && params && params.id && existingCharacter) {
      title = existingCharacter.name
    } else {
      title = 'Create new Character'
    }
  }

  function toggleEditMode() {
    editMode = !editMode
  }

  export let params
</script>

<Loading data={[allEvents]}>
  <PageContainer title={title}>
    {#if id === null || editMode}
      <CreateCharacter
        {existingCharacter}
        {toggleEditMode}
        {allEvents}
      />
      {#if editMode}
        <Button onClick={toggleEditMode}>Cancel Editing</Button>
      {/if}
    {:else}
      <ViewCharacter
        {existingCharacter}
        {toggleEditMode}
      />
      <br />
      <Button onClick={toggleEditMode}>Edit</Button>
    {/if}
  </PageContainer>  
</Loading>

