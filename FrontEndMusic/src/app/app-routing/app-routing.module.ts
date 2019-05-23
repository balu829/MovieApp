import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MovieListComponent} from "../movie-list/movie-list.component";
import {MovieEditComponent} from "../movie-edit/movie-edit.component";
import {MovieAddComponent} from "../movie-add/movie-add.component";

const routes: Routes =[
  { path: '', redirectTo: '/movie-list', pathMatch: 'full' },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-edit/:id', component: MovieEditComponent },
  { path: 'movie-add', component: MovieAddComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
