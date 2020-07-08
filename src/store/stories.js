import { writable } from 'svelte/store';

const INITIAL_STORIES = []

const { subscribe, set, update } = writable(INITIAL_STORIES)

const addStory = newStory => update(previousStories => [...previousStories, newStory])

const setStories = stories => update(_ => stories)

const reset = () => {
    set(INITIAL_STORIES)
}

export default {
    subscribe,
    addStory,
    reset,
    setStories
}