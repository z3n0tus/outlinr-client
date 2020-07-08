<script>
  import { onMount } from 'svelte'
  import { Router, Route, Link } from 'svelte-routing'
  import { CharactersPage, CharacterPage, EventPage } from './pages'
  import { characters, events, stories, subplots } from './store'
  import * as api from './api'
  
  onMount(async () => {
    const storiesResponse = api.getEntities('Lee', 'story')
    const subplotsResponse = api.getEntities('Lee', 'subplot')

    stories.setStories(storiesResponse)
    subplots.setSubplots(subplots)
  })

  const url = '/characters'
</script>

<style>
  nav {
    margin-bottom: 8px;
    background-color: black;
    padding: 12px;
  }
</style>

<nav>
  Outlinr
</nav>
<main>
  <Router url={url}>
     <div>
        <Route path="character/:id" component={CharacterPage} />
        <Route path="characters" component={CharactersPage} />
        <Route path="event/:characterId/:id" component={EventPage} />
     </div>
  </Router>
</main>
