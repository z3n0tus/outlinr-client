import { writable } from 'svelte/store';

const INITIAL_SUBPLOTS = []

const { subscribe, set, update } = writable(INITIAL_SUBPLOTS)

const addSubplot = newSubplot => update(previousSubplots => [...previousSubplots, newSubplot])

const setSubplots = subplots => update(_ => subplots)

const reset = () => {
    set(INITIAL_SUBPLOTS)
}

export default {
    subscribe,
    addSubplot,
    reset,
    setSubplots
}