<script>
  import { onMount } from 'svelte'
  import Router, { push } from 'svelte-spa-router'
  import { characters, events, stories, subplots } from './store'
  import { Button } from './components/basic'
  import { CreateCharacter } from './components/character'
  import {
    CharactersPage,
    StoriesPage,
    StoryPage,
    SubplotPage,
    CharacterPage,
    EventPage,
  } from './pages'
  
  onMount(async () => {
    
  })

  let showCreateDropdown = false

  const routes = {
    '/': StoriesPage,
    '/story': StoryPage,
    '/story/:id': StoryPage,
    '/character': CharacterPage,
    '/subplot': SubplotPage,
    '/event': EventPage,
  }

  function toggleCreateDropdown() {
    showCreateDropdown = !showCreateDropdown
  }

  function goHome() {
    push('/')
  }
</script>

<style>
  nav {
    background-color: black;
    padding: 16px;
  }

  h1 {
    margin: 0;
    font-weight: normal;
    font-size: 28px;
  }

  nav {
    display: flex;
  }

  .title {
    flex: 3;
  }

  .create {
    font-size: 12px;
    position: relative;
  }

  .dropdown {
    position: absolute;
    background-color: black;
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
  }

  .dropdown > a {
    display: block;
    margin: 4px;
  }
</style>

<nav>
  <div class="title">
    <h1 on:click={goHome}>Outlinr</h1>
  </div>
  <div class="create">
    <Button onClick={toggleCreateDropdown}>Create</Button>
    {#if showCreateDropdown}
      <div class="dropdown" on:click={toggleCreateDropdown}>
        <a href="#/story">Story</a>
        <a href="#/subplot">Subplot</a>
        <a href="#/character">Character</a>
        <a href="#/event">Event</a>
      </div>
    {/if}
  </div>
</nav>
<main>
  <Router {routes} />
</main>


