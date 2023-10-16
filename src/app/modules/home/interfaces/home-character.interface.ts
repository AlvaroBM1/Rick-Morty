//foto nombre genero y planeta

import { Location } from "../../shared/interfaces/character.interface";

export interface HomeCharacter {

  image: string;
  name: string; //enum
  gender: string;
  origin: Location;

}
