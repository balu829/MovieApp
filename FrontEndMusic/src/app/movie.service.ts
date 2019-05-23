import { Injectable } from '@angular/core';
//import { Http,Headers,Response} from '@angular/http';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) {}

  public API = '//localhost:8080/api';

  getAll(): Observable<any> {
    return this.http.get(this.API + '/movies');
  }

  getMovieById(id){
    console.log("here");
    return this.http.get(this.API + '/movie/'+ id);
  }

  updateMovie(id, movie: any) : Observable<any>{
    return this.http.put(this.API+'/movie/' +id, movie );
  }

  addNewMovie(movie: any): Observable<any>{
    return this.http.post(this.API+'/movie', movie);
  }

  deleteMovie(id): Observable<any>{
    return this.http.delete(this.API + '/movie/' + id);
  }

}
