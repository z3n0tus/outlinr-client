<script>
  import { TextDisplay, EntityList, Container } from '../basic'

  let subplots = []
  let characters = []

  $: {
    if (existingStory) {
      if (existingStory.subplots) {
        subplots = allSubplots.filter(s => existingStory.subplots.includes(s.id))
      }
      
      if (existingStory.characters) {
        characters = allCharacters.filter(s => existingStory.characters.includes(s.id))
      }
    }
  }

  export let existingStory, allSubplots, allCharacters
</script>

{#if existingStory}
  <TextDisplay label="Beginning" text={existingStory.beginning} />
  <br />
  <TextDisplay label="End" text={existingStory.end} />
  <br />
  <EntityList
    label="Subplots"
    entityType="subplot"
    entities={subplots}
    headlineKey="description"
    identificationKey="id"
  />
  <br />
  <EntityList
    label="Characters"
    entityType="character"
    entities={characters}
    headlineKey="name"
    identificationKey="id"
  />
{/if}