
import { CharacterGenderEnum } from "../enums/home-character-gender.enum";

export interface CharacterResponse {
  created: string;
  episode: string[];
  gender: CharacterGenderEnum;
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Location;
  species?: string;
  status?: string;
  type?: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}
