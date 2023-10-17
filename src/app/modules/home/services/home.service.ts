import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CharacterResponse } from '../interfaces/character-response.interface';
import { CharacterGenderEnum } from "../enums/home-character-gender.enum";
import { HomeCharacter } from '../interfaces/home-character.interface';


@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'https://rickandmortyapi.com/api/';

  // getAllCharacters(): Observable<HomeCharacter[]> {

  //   const url = `${this.baseUrl}character`;
  //   return this.http.get<CharacterResponse[]>(url).pipe(
  //     map<CharacterResponse[], HomeCharacter[]>((characters: CharacterResponse[]) => {
  //       console.log(characters);
  //       characters.map((character: CharacterResponse) =>
  //       ({
  //         image: character.image,
  //         name: character.name,
  //         gender: character.gender,
  //         origin: character.origin.name,
  //       }))
  //     })
  //   );
  // }

  getAllCharacters(): Observable<HomeCharacter[]> {
    const url = `${this.baseUrl}character`;
    return this.http.get<CharacterResponse[]>(url).pipe(
      map((response: CharacterResponse[]) => {
        if (Array.isArray(response)) {
          return response.map((character: CharacterResponse) => ({
            image: character.image,
            name: character.name,
            gender: character.gender,
            origin: character.origin.name,
          }));
        } else {
          // Manejar el caso en el que la respuesta no es una matriz, por ejemplo, lanzando un error o devolviendo una matriz vacía.
          return response;
        }
      })
    );
  }






//he tenido que cambiar el character: homeCharacter por CharacterResponse, siue funcionando
//pero creo que no es lo mejor
//habra que hacer un map de array, si viene un array
  // Agrega otros métodos según sea necesario
}
