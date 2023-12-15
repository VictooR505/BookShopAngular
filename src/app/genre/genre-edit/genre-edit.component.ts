import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorService} from "../../author/author.service";
import {Genre} from "../genre";
import {GenreService} from "../genre.service";

@Component({
  selector: 'app-genre-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.css']
})
export class GenreEditComponent {
  public genre = new Genre();
  public genreId = null;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private genreService: GenreService) {
    this.genreId = this.route.snapshot.queryParams['genreId'];
  }

  updateGenre(): void {
    const genreUpdateDTO = { name: this.genre.name };

    this.genreService.updateGenre(this.genreId!, genreUpdateDTO).subscribe(() => {
      this.gotoGenreList();
    });
  }

  gotoGenreList(){
    this.router.navigate(['genres']);
  }

}
