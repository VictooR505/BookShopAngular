import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./book/book-list/book-list.component";
import {AuthorListComponent} from "./author/author-list/author-list.component";
import {AuthorFormComponent} from "./author/author-form/author-form.component";
import {AuthorEditComponent} from "./author/author-edit/author-edit.component";
import {GenreListComponent} from "./genre/genre-list/genre-list.component";
import {GenreEditComponent} from "./genre/genre-edit/genre-edit.component";
import {GenreFormComponent} from "./genre/genre-form/genre-form.component";
import {BookFormComponent} from "./book/book-form/book-form.component";
import {BookEditComponent} from "./book/book-edit/book-edit.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login/login.component";

const routes: Routes = [
  { path: 'books', component: BookListComponent},
  { path: 'authors', component: AuthorListComponent},
  { path: 'genres', component: GenreListComponent},
  { path: 'addbook', component: BookFormComponent},
  { path: 'addauthor', component: AuthorFormComponent},
  { path: 'addgenre', component: GenreFormComponent},
  { path: 'editbook', component: BookEditComponent},
  { path: 'editauthor', component: AuthorEditComponent},
  { path: 'editgenre', component: GenreEditComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
