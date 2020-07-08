import { navigate } from 'svelte-routing';

export const goToCharacterPage = (id) => {
  navigate(`/character/${id}`);
};

export const goToEventPage = (id) => {
  navigate(`/event/${id}`);
}