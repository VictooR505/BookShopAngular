import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {BookEditModule} from "./book/book-edit/book-edit.module";

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
    LoginComponent,
    SignupComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BookFormModule,
        BookEditModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
