<script>
  export let onClick

  export let disabled = false
</script>

<div class="btn-wrapper">
  <button disabled={disabled} on:click={onClick}>
    <slot />
  </button>
</div>

<style>
    .btn-wrapper {
      font-size: inherit;
    }

    button {
      padding: 8px 32px;
      background-color: transparent;
      font-size: inherit;
      color: inherit;
    }

    button:hover {
      cursor: pointer;
    }
</style>