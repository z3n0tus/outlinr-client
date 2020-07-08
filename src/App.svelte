<script>
  import { Router, Route, Link } from 'svelte-routing'; 
  import { CharactersPage, CharacterPage, EventPage } from './pages';

  const url = '/characters';
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
        <Route path="event/:id" component={EventPage} />
     </div>
  </Router>
</main>
