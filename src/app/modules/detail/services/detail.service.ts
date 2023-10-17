import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { CharacterResponse } from "../../home/interfaces/character-response.interface";
import { HomeCharacter } from "../../home/interfaces/home-character.interface";


@Injectable()
export class HomeService {

  private baseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  getCharacterById(id: string | null): Observable<HomeCharacter[]> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<CharacterResponse[]>(url).pipe(
      map<CharacterResponse[], HomeCharacter[]>((characters: CharacterResponse[]) => characters.map((character: CharacterResponse) =>
      ({

        gender: character.gender,
        image: character.image,
        name: character.name,
        origin: character.origin.name,
      }
      ))));
  }


}
