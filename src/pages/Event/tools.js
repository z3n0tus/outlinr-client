import * as eventsService from '../../service/events.service';
import * as characterService from '../../service/character.service';

export const getEvent = (id) => {
  return eventsService.getEventById(id);
};

export const getAssociatedCharactersByIds = (ids) => {
  return characterService.getCharactersByIds(ids);
}