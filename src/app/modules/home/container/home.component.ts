
import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, of, switchMap } from 'rxjs';


import { Router } from '@angular/router';
import { HomeCharacter } from '../interfaces/home-character.interface';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  //name: string = '';
  public characters: HomeCharacter[] = [];
  //selectedGender: string = '';

  constructor(private charactersService: HomeService) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  // // Método para manejar la búsqueda cuando se envía el formulario.
  // searchName(): void {
  //   this.charactersService
  //     .searchCharacters('?name=' + this.name)
  //     .pipe(
  //       debounceTime(300),
  //       catchError((error) => {
  //         console.error(error); // Log del error en la consola.
  //         this.characters = []; // Borra la lista en caso de error 404.
  //         return of([]); // Devuelve un observable vacío para evitar propagar el error.
  //       })
  //     )
  //     .subscribe((response: any) => {
  //       // Verificamos si 'results' existe en la respuesta y si es un array.
  //       if (response && response.results && Array.isArray(response.results)) {
  //         this.characters = response.results;
  //       } else {
  //         // Si la estructura de la respuesta es incorrecta o no contiene 'results', asignamos un array vacío.
  //         this.characters = [];
  //       }
  //     });
  // }

  // searchByGenre(): void {
  //   this.charactersService
  //     .searchCharacters('?gender=' + this.selectedGender)
  //     .pipe(
  //       debounceTime(300),
  //       catchError((error) => {
  //         console.error(error); // Log del error en la consola.
  //         this.characters = []; // Borra la lista en caso de error 404.
  //         return of([]); // Devuelve un observable vacío para evitar propagar el error.
  //       })
  //     )
  //     .subscribe((response: any) => {
  //       // Verificamos si 'results' existe en la respuesta y si es un array.
  //       if (response && response.results && Array.isArray(response.results)) {
  //         this.characters = response.results;
  //       } else {
  //         // Si la estructura de la respuesta es incorrecta o no contiene 'results', asignamos un array vacío.
  //         this.characters = [];
  //       }
  //     });
  // }

  // search(name: string, gender: string): void {
  //   // Verifica si 'name' y 'gender' están presentes.
  //   if (name && gender) {
  //     // Si ambos están presentes, construye la URL de consulta con ambos parámetros.
  //     const queryParams = `?name=${name}&gender=${gender}`;
  //     this.performSearch(queryParams);
  //   } else if (name) {
  //     // Si solo 'name' está presente, construye la URL de consulta con el parámetro 'name'.
  //     const queryParams = `?name=${name}`;
  //     this.performSearch(queryParams);
  //   } else if (gender) {
  //     // Si solo 'gender' está presente, construye la URL de consulta con el parámetro 'gender'.
  //     const queryParams = `?gender=${gender}`;
  //     this.performSearch(queryParams);
  //   } else {
  //     // Si ambos están vacíos, realiza una búsqueda sin parámetros.
  //     this.performSearch('');
  //   }
  // }

  private getAllCharacters(): void {
    this.charactersService
      .getAllCharacters()
      .subscribe({
        next:(homeCharacters: HomeCharacter[]) => {
          this.characters = homeCharacters
          console.log('homeCharacters', homeCharacters);

        }
        ,
        error: (error: any) => {
          console.log('Error solicitud Http', error);
        }
      })
  }
}
