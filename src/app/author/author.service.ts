import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author, AuthorUpdateDTO} from "./author";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authorUrl: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService) {
    this.authorUrl = 'http://localhost:8080/authors';
  }

  public authorList(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorUrl, {
      headers: this.authService.createAuthorizationHeader()
    });
  }

  public addAuthor(author: Author){
    return this.http.post(this.authorUrl, author, {
      headers: this.authService.createAuthorizationHeader()
    });
  }

  deleteAuthor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.authorUrl}/id/${id}`, {
      headers: this.authService.createAuthorizationHeader()
    });
  }

  updateAuthor(id: number, authorDTO: any): Observable<void> {
    return this.http.patch<void>(`${this.authorUrl}/id/${id}`,authorDTO, {
      headers: this.authService.createAuthorizationHeader()
    });
  }
}
