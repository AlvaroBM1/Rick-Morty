import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CharacterResponse } from '../../shared/interfaces/character.interface';
import { HomeCharacter } from '../interfaces/home-character.interface';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'https://rickandmortyapi.com/api/character/'; // Reemplaza con la URL real de tu API.

  constructor(private http: HttpClient) {}

  // Método para buscar personajes por nombre y género.
  searchCharacters(query: string): Observable<CharacterResponse[]> {
    const queryParams = `${query}`;
    const url = `${this.apiUrl}${queryParams}`;

    return this.http.get<CharacterResponse[]>(url);
  }

  getHomeCharacter(id: string | null): Observable<HomeCharacter[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<CharacterResponse[]>(url).pipe(
      map((characters: CharacterResponse[]) => characters.map(character => ({
        foto: character.image,
        name: character.name,
        gender: character.gender,
        planet: character.origin,
      } as unknown as HomeCharacter)))
    );
  }

//habra que hacer un map de array, si viene un array
  // Agrega otros métodos según sea necesario
}
