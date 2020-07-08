import * as characterService from '../../service/character.service';

export const getAllCharacters = () => {
  return characterService.getAll();
};