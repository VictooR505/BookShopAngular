import { Component } from '@angular/core';
import {Author} from "../author";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorService} from "../author.service";

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent {

  author: Author = new Author();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService) {
  }

  onSubmit(){
    this.authorService.addAuthor(this.author).subscribe(result => this.gotoAuthorList());
  }

  gotoAuthorList(){
    this.router.navigate(['authors']);
  }
}
