import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genre} from "./genre";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private genreUrl: string;

  constructor(private http: HttpClient) {
    this.genreUrl = 'http://localhost:8080/genres';
  }

  public genreList(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genreUrl);
  }

  public addGenre(genre: Genre){
    return this.http.post(this.genreUrl, genre);
  }

  deleteGenre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.genreUrl}/id/${id}`);
  }

  updateGenre(id: number, genreDTO: any): Observable<void> {
    return this.http.patch<void>(`${this.genreUrl}/id/${id}`,genreDTO);
  }
}
