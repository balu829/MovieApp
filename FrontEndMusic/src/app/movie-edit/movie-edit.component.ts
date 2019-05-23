import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../movie.service";
import {extractStyleParams} from "@angular/animations/browser/src/util";
import {Subscription} from "rxjs/index";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movie: any ={};
  sub: Subscription;
  id: any;
  constructor(private route: ActivatedRoute, private router: Router, private service: MovieService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {this.getMovie(params['id']); this.id=params['id']});
  }

  getMovie(id){
    console.log("ts");
    this.service.getMovieById(id).subscribe(data => {this.movie=data});
    console.log(this.movie);
  }

  updateMovie(form: NgForm){

    this.service.updateMovie(this.id,form).subscribe(data => {this.router.navigate(['/movie-list']);});

  }
}
