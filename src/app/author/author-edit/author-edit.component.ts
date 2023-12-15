import {Component, Input} from '@angular/core';
import {Author} from "../author";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorService} from "../author.service";

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent {
  public author = new Author();
  public authorId = null;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authorService: AuthorService) {
    this.authorId = this.route.snapshot.queryParams['authorId'];
  }

  updateAuthor(): void {
    const authorUpdateDTO = { name: this.author.name };

    this.authorService.updateAuthor(this.authorId!, authorUpdateDTO).subscribe(() => {
      this.gotoAuthorList();
    });
  }

  gotoAuthorList(){
    this.router.navigate(['authors']);
  }
}
