import {Component, OnInit} from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.bookList().subscribe(data => {
      this.books = data;
    })
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => this.ngOnInit());
  }

}
