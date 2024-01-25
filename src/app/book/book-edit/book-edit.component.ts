import {Component, OnDestroy, OnInit} from '@angular/core';
import {forkJoin, Observable, Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book.service";
import {AuthorService} from "../../author/author.service";
import {GenreService} from "../../genre/genre.service";
import {Author} from "../../author/author";
import {Genre} from "../../genre/genre";
import {BookCreateDto} from "../book";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit, OnDestroy{
  private readonly subscription = new Subscription();
  public readonly optionsData$ = this.fetchOptionsData();
  public bookForm!: FormGroup;
  public bookId = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
    private authorService: AuthorService,
    private genreService: GenreService,
    private fb: FormBuilder) {
    this.bookId = this.route.snapshot.queryParams['bookId']
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
      this.updateBook(this.bookForm.value as BookCreateDto);
    }
  }

  public updateBook(bookDto: BookCreateDto): void {
    this.subscription.add(
      this.bookService.updateBook(this.bookId!,bookDto)
        .subscribe(() => this.gotoBookList())
    );
  }

  private gotoBookList(): void {
    this.router.navigate(['/books']);
  }

}
