<script>
  import { onMount } from 'svelte'
  import Input from '../Input/index.svelte'

  let filterTerm = ''
  let filteredOptions = []
  let selected = ""
  let showDropdown = false

  onMount(() => {
    options.forEach(o => {
      if (!o.id || !o.value) {
        console.error(
          "Multiselect component won't work because some options don't have an id or a value field. Both are required."
        )
      }
    })
  })

  const setSelected = (selection) => {
    selectItem(selection)
    selected = selection.value
  }

  const removeSelected = (selection) => {
    deselectItem(selection)
    selected = ""
  }

  $: {
    showDropdown = filterTerm.length > 0 && filteredOptions.length > 0
  }

  $: {
    filteredOptions = options.filter(o => o.value.toLowerCase().includes(filterTerm.toLowerCase()))
  }

  // Option must have a 'value' field and an 'id' field on it so that the dropdown knows what to display.
  export let options, selectItem, deselectItem, label
</script>

<main>
  <Input label={label} bind:value={filterTerm} />
  {#if selected.length > 0} 
    <p>
      Selected: {selected}
    </p>
  {/if}
  {#if showDropdown}
    <div class="dropdown">
      {#each filteredOptions as option}
        <div
          class="dropdown-option"
          on:click={() => setSelected(option)}
          class:selected={option.value === selected}
        >
          {option.value}
        </div>
      {/each}
    </div>
  {/if}
</main>

<style>
  .dropdown {
    background-color: #09080d;
    padding: 8px;
  }

  .dropdown-option {
    padding: 8px;
    border: 1px solid #696969;
  }

  .dropdown-option:hover {
    cursor: pointer;
    color: yellow;
    border: 1px solid yellow;
  }

  .selected {
    color: yellow;
    border: 1px solid yellow;
  }
</style>