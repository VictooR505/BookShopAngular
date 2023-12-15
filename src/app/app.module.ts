import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import {BookService} from "./book/book.service";
import {HttpClientModule} from "@angular/common/http";
import { AuthorListComponent } from './author/author-list/author-list.component';
import {AuthorService} from "./author/author.service";
import { AuthorFormComponent } from './author/author-form/author-form.component';
import {FormsModule} from "@angular/forms";
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { GenreListComponent } from './genre/genre-list/genre-list.component';
import { GenreFormComponent } from './genre/genre-form/genre-form.component';
import { GenreEditComponent } from './genre/genre-edit/genre-edit.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AuthorListComponent,
    AuthorFormComponent,
    AuthorEditComponent,
    GenreListComponent,
    GenreFormComponent,
    GenreEditComponent,
    BookFormComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService,AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
