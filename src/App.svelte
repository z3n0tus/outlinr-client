<script>
  import { onMount } from 'svelte'
  import { Router, Route, Link } from 'svelte-routing'
  import { CharactersPage, CharacterPage, EventPage } from './pages'
  import { characters, events, stories, subplots } from './store'
  import * as api from './api'

  import { CreateSubplot } from './components/subplot'
  
  onMount(async () => {
    const storiesResponse = await api.getEntities('Lee', 'story')
    const subplotsResponse = await api.getEntities('Lee', 'subplot')
    const charactersResponse = await api.getEntities('Lee', 'character')
    const eventsResponse = await api.getEntities('Lee', 'event')

    characters.setCharacters(charactersResponse)
    events.setEvents(eventsResponse)
    stories.setStories(storiesResponse)
    subplots.setSubplots(subplotsResponse)
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
<!-- <main>
  <Router url={url}>
     <div>
        <Route path="create/character" component={CharacterPage} />
        <Route path="character/:id" component={CharacterPage} />
        <Route path="characters" component={CharactersPage} />
        <Route path="event/:characterId/:id" component={EventPage} />
     </div>
  </Router>
</main> -->

<CreateSubplot />

