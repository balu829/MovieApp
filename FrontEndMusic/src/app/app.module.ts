import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {HttpClientModule} from "@angular/common/http";
import {MovieService} from "./movie.service";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import {FormsModule} from "@angular/forms";
import { MovieAddComponent } from './movie-add/movie-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieEditComponent,
    MovieAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
