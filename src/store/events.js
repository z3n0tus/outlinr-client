import { writable } from 'svelte/store';

const INITIAL_EVENTS = []

const { subscribe, set, update } = writable(INITIAL_EVENTS)

const addEvent = newEvent => update(previousEvents => [...previousEvents, newEvent])

const setEvents = events => update(_ => events)

const reset = () => {
    set(INITIAL_EVENTS)
}

export default {
    subscribe,
    addEvent,
    reset,
    setEvents
}