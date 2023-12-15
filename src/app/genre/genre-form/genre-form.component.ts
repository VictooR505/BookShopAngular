import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Genre} from "../genre";
import {GenreService} from "../genre.service";

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.css']
})
export class GenreFormComponent {
  genre: Genre;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private genreService: GenreService) {
    this.genre = new Genre();
  }

  onSubmit(){
    this.genreService.addGenre(this.genre).subscribe(result => this.gotoGenreList());
  }

  gotoGenreList(){
    this.router.navigate(['genres']);
  }
}
