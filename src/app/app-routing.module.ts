import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./book/book-list/book-list.component";
import {AuthorListComponent} from "./author/author-list/author-list.component";
import {AuthorFormComponent} from "./author/author-form/author-form.component";
import {AuthorEditComponent} from "./author/author-edit/author-edit.component";
import {GenreListComponent} from "./genre/genre-list/genre-list.component";
import {GenreEditComponent} from "./genre/genre-edit/genre-edit.component";
import {GenreFormComponent} from "./genre/genre-form/genre-form.component";

const routes: Routes = [
  { path: 'books', component: BookListComponent},
  { path: 'authors', component: AuthorListComponent},
  { path: 'genres', component: GenreListComponent},
  { path: 'addauthor', component: AuthorFormComponent},
  { path: 'addgenre', component: GenreFormComponent},
  { path: 'editauthor', component: AuthorEditComponent},
  { path: 'editgenre', component: GenreEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
