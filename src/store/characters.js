import { writable } from 'svelte/store';

const INITIAL_CHARACTERS = []

const { subscribe, set, update } = writable(INITIAL_CHARACTERS)

const addCharacter = newCharacter => update(previousCharacters => [...previousCharacters, newCharacter])

const setCharacters = characters => update(_ => characters)

const reset = () => {
    set(INITIAL_CHARACTERS)
}

export default {
    subscribe,
    addCharacter,
    reset,
    setCharacters
}