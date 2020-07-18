<script>
  import { onMount } from 'svelte'
  import * as routerTools from '../../global_tools/router_tools'
  import * as api from '../../api'
  import { characters, events } from '../../store'
  import { CreateCharacter, ViewCharacter } from '../../components/character'

  let editMode = false
  let character = { };
  let backstoryEvents = [];

  onMount(() => {
    character = $characters.find(c => c.id === id) || {}
    backstoryEvents = $events.filter(e => character.backstoryEvents.includes(e.id)) || []
    editMode = !id
  })

  const goToEventPage = (eventId) => {
    routerTools.goToEventPage(id, eventId);
}

  async function saveNewCharacter(character, newEvents) {
    await api.saveCharacterAndEvents("Lee", character, newEvents)
  }

  export let id;
</script>

<main>
  {#if !id || editMode}
    <CreateCharacter backstoryEvents={backstoryEvents} saveCharacter={saveNewCharacter} />
  {:else}
    <ViewCharacter />
  {/if}
</main>

<style>
  main {
    padding: 16px;
  }
</style>

