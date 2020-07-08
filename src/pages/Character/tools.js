import * as characterService from '../../service/character.service';
import * as eventsService from '../../service/events.service';

export const getCharacter = (id) => {
  return characterService.getSingle(id);
};

export const getAllBackstoryEvents = (eventsIds) => {
  return eventsService.getEventsByIds(eventsIds);
}