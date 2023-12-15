import {Component, OnInit} from '@angular/core';
import {Author} from "../author";
import {AuthorService} from "../author.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit{
  authors?: Author[];

  constructor(private authorService: AuthorService) {

  }

  ngOnInit() {
    this.authorService.authorList().subscribe(data => {
      this.authors = data;
    })
  }

  deleteAuthor(id: number): void {
    this.authorService.deleteAuthor(id).subscribe(() => this.ngOnInit());
  }
}
