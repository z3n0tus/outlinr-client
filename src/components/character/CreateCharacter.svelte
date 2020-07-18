<script>
  import { onMount } from 'svelte'
  import { Button, Input } from '../basic'
  import { CreateEvent } from '../event'

  let name = ''
  let imgURL = ''
  let allBackstoryEvents = []
  let newBackstoryEvents = []
  let createEventMode = false

  onMount(() => {
    allBackstoryEvents = backstoryEvents
  })

  function save() {
    // Save character and all newly created events.
    saveCharacter({ name, imgURL, backstoryEvents: allBackstoryEvents.map(be => be.id) }, newBackstoryEvents)
  }

  function saveNewEvent(event) {
    createEventMode = false
    allBackstoryEvents = [...allBackstoryEvents, event]
    newBackstoryEvents = [...newBackstoryEvents, event]
  }

  function closeEventCreator() {
    createEventMode=false
  }

  export let saveCharacter, backstoryEvents
</script>

<h1>Create new Character</h1>
<hr />

<Input bind:value={name} label="Name" />
<Input bind:value={imgURL} label="Image URL" />
<br />
<hr />
<p>All Backstory Events</p>

{#if createEventMode}
  <p on:click={closeEventCreator} class="close">X</p>
  <CreateEvent saveEvent={saveNewEvent} />
{:else}
  <Button onClick={() => createEventMode = true}>Create new Event</Button>
{/if}

{#each allBackstoryEvents as event}
  <div>
    {event.description}
  </div>
{/each}
<hr />
<br />
<Button onClick={save}>Save</Button>

<style>
  .close {
    color: blue;
  }
</style>