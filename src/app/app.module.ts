import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { AuthorFormComponent } from './author/author-form/author-form.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { GenreEditComponent } from './genre/genre-edit/genre-edit.component';
import { GenreFormComponent } from './genre/genre-form/genre-form.component';
import { GenreListComponent } from './genre/genre-list/genre-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookFormModule } from './book/book-form/book-form.module';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup.component';

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
    BookEditComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BookFormModule,
    BrowserAnimationsModule
  ],
  providers: [], // jeśli robisz @Injectable({ providedIn: 'root'}) w serwisie, staje
                 // się on od razu singletonem i nie trzeba go umieszczać w provider'sach
                 // jedyne co musisz robić później to tylko DI w komponentach
                 // na dobrą sprawę można się pozbyć tej tablicy providers ale zostawiam dla referencji
  bootstrap: [AppComponent]
})
export class AppModule { }
