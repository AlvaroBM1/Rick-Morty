import { NgModule } from "@angular/core";
import { DetailComponent } from "./container/detail.component";
import { Routes } from "@angular/router";

const routes: Routes = [
  {
    path:'',
    component: DetailComponent
  }
]


@NgModule()
export class DetailModule { }
