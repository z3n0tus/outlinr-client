<script>
  import { onMount } from 'svelte'
  import Input from '../Input/index.svelte'

  let filterTerm = ''
  let filteredOptions = []
  let selected = []
  let showDropdown = false

  onMount(() => {
    options.forEach(o => {
      if (!o[displayKey] || !o[identificationKey]) {
        console.log(o)
        console.error(
          "Multiselect component won't work because some options don't have the corresponding display or identification key."
        )
      }
    })

    if (alreadySelected) {
      selected = alreadySelected.map(id => options.find(o => o[identificationKey] === id))
    }
  })

  const addSelected = (selection) => {
    selectItem(selection)
    selected = [...selected, selection]
  }

  const removeSelected = (selection) => {
    deselectItem(selection)
    selected = selected.filter(s => s[identificationKey] !== selection[identificationKey])
  }

  const toggleSelected = (selection) => {
    if (selected.indexOf(selection) > -1) {
      removeSelected(selection)
    } else {
      addSelected(selection)
    }
  } 

  $: {
    showDropdown = filterTerm.length > 0 && filteredOptions.length > 0
  }

  $: {
    filteredOptions = options.filter(o => o[displayKey].toLowerCase().includes(filterTerm.toLowerCase()))
  }

  // Option must have a 'value' field and an 'id' field on it so that the dropdown knows what to display.
  export let options, selectItem, deselectItem, label, displayKey, identificationKey, alreadySelected
</script>

<main>
  <Input label={label} bind:value={filterTerm} />
  {#if selected.length > 0} 
    <p>
      Selected:
      {#each selected as selection}
        <span
          class="selected-list-item"
          on:click={() => toggleSelected(selection)}
        >
          {selection[displayKey]}, 
        </span>
      {/each}
    </p>
  {/if}
  {#if showDropdown}
    <div class="dropdown">
      {#each filteredOptions as option}
        <div
          class="dropdown-option"
          on:click={() => toggleSelected(option)}
          class:selected={selected.indexOf(option) > -1}
        >
          {option[displayKey]}
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

  .selected-list-item:hover {
    cursor: pointer;
    color: red;
  }

  .selected {
    color: yellow;
    border: 1px solid yellow;
  }
</style>