<script>
  export let value, placeholder, label, textarea
</script>

<div>
  <label>
    <p>{label}</p>
    {#if textarea}
      <textarea bind:value={value} placeholder={placeholder} />
    {:else}
      <input bind:value={value} placeholder={placeholder} />
    {/if}
  </label>
</div>

<style>
  input {
      background: black;
      color: inherit;
      border: none;
      background-color: #09080d;
      width: 100%;
      padding: 16px;
    }

    textarea {
      background: black;
      color: inherit;
      border: none;
      background-color: #09080d;
      width: 100%;
      height: 100px;
      resize: none;
      padding: 16px;
    }

   p {
      font-size: 1.2rem;
    }
</style>