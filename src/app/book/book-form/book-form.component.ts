import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable, Subscription, forkJoin } from 'rxjs';
import { Author } from 'src/app/author/author';
import { AuthorService } from 'src/app/author/author.service';
import { Genre } from 'src/app/genre/genre';
import { GenreService } from 'src/app/genre/genre.service';
import { BookCreateDto } from '../book';
import { BookService } from "../book.service";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit, OnDestroy {

  private readonly subscription = new Subscription();
  public readonly optionsData$ = this.fetchOptionsData();
  public bookForm!: FormGroup;

  constructor(
      private router: Router,
      private bookService: BookService,
      private authorService: AuthorService,
      private genreService: GenreService,
      private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.initForm();
    this.fetchOptionsData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private fetchOptionsData(): Observable<{authors: Author[], genres: Genre[]}> {
    return forkJoin({
      authors: this.authorService.authorList(),
      genres: this.genreService.genreList()
    });
  }

  private initForm(): void {
    this.bookForm = this.fb.group({
      author: [null, Validators.required],
      title: ['', Validators.required],
      genre: [null, Validators.required],
      price: [null, Validators.required],
      count: [null, Validators.required]
    })
  }

  public confirm(): void {
    if (this.bookForm.valid) {
      this.onSubmit(this.bookForm.value as BookCreateDto);
    }
  }

  public onSubmit(bookDto: BookCreateDto): void {
    this.subscription.add(
      this.bookService.addBook(bookDto)
      .subscribe(() => this.gotoBookList())
    );
  }

  private gotoBookList(): void {
    this.router.navigate(['/books']);
  }
}
