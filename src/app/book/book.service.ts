import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, map } from "rxjs";
import { Book, BookCreateDto } from "./book";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUrl: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService) {
    this.bookUrl = 'http://localhost:8080/books';
  }
  public bookList(): Observable<Book[]> {
    return this.http.get(this.bookUrl, {
      headers: this.authService.createAuthorizationHeader()
    }).pipe(map((data: any) => data.content));
  }

  public addBook(bookCreateDto: BookCreateDto){
    return this.http.post(this.bookUrl, bookCreateDto);
  }

  public deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.bookUrl}/id/${id}`);
  }

  public updateBook(id: number, bookDTO: any): Observable<void> {
    return this.http.patch<void>(`${this.bookUrl}/id/${id}`,bookDTO);
  }
}
