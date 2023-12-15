import {Component, OnInit} from '@angular/core';
import {Genre} from "../genre";
import {GenreService} from "../genre.service";

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit{
  genres?: Genre[];

  constructor(private genreService: GenreService) {

  }

  ngOnInit() {
    this.genreService.genreList().subscribe(data => {
      this.genres = data;
    })
  }

  deleteGenre(id: number): void {
    this.genreService.deleteGenre(id).subscribe(() => this.ngOnInit());
  }
}
