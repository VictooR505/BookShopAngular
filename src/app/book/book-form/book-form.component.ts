import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book.service";
import {Book} from "../book";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  book: Book = new Book();
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private bookService: BookService) {
  }

  onSubmit(){
    this.bookService.addBook(this.book).subscribe(result => this.gotoBookList());
  }

  gotoBookList(){
    this.router.navigate(['books']);
  }
}
