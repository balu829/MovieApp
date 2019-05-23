import { Component, OnInit } from '@angular/core';
import {MovieService} from "../movie.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  constructor( private service: MovieService, private router: Router) { }

  ngOnInit() {
  }

  addMovie(form: NgForm){


    this.service.addNewMovie(form).subscribe((data)=> {this.router.navigate(['/movie-list']);},
      (error) => {console.log(error)});
  }

}
