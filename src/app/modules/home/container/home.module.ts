import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([  // Utiliza 'forChild' para configurar rutas en módulos de características.
      { path: '', component: HomeComponent },  // Ruta para el componente HomeComponent.
    ]),

    HttpClientModule,
  ],
})
export class HomeModule { }
