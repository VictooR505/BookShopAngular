import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, map } from "rxjs";
import { Book, BookCreateDto } from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUrl: string;

  constructor(private http: HttpClient) {
    this.bookUrl = 'http://localhost:8080/books';
  }
  public bookList(): Observable<Book[]> {
    return this.http.get(this.bookUrl).pipe(map((data: any) => data.content));
  }

  public addBook(bookCreateDto: BookCreateDto){
    return this.http.post(this.bookUrl, bookCreateDto);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.bookUrl}/id/${id}`);
  }

  updateBook(id: number, bookDTO: any): Observable<void> {
    return this.http.patch<void>(`${this.bookUrl}/id/${id}`,bookDTO);
  }
}
