<script>
  import { onMount } from 'svelte'
  import { PageContainer, Card } from '../../components/basic'
  import store from '../../store'

  let stories = []

  onMount(async () => {
    stories = await store.getStories()
  })

</script>

<PageContainer title="Your Stories">
  {#each stories as story}
    <Card headline={story.name} link={`/story/${story.id}`} />
  {/each}
</PageContainer>