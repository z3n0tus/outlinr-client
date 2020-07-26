<script>
  import { TextDisplay } from '../basic'

  export let existingStory
</script>

{#if existingStory}
  <TextDisplay label="Beginning" text={existingStory.beginning} />
  <TextDisplay label="End" text={existingStory.end} />
{/if}