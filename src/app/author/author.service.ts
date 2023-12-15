import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author, AuthorUpdateDTO} from "./author";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authorUrl: string;

  constructor(private http: HttpClient) {
    this.authorUrl = 'http://localhost:8080/authors';
  }

  public authorList(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorUrl);
  }

  public addAuthor(author: Author){
    return this.http.post(this.authorUrl, author);
  }

  deleteAuthor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.authorUrl}/id/${id}`);
  }

  updateAuthor(id: number, authorDTO: any): Observable<void> {
    return this.http.patch<void>(`${this.authorUrl}/id/${id}`,authorDTO);
  }
}
