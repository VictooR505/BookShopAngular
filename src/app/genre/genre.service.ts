import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genre} from "./genre";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private genreUrl: string;

  constructor(private http: HttpClient,
              private authService: AuthService) {
    this.genreUrl = 'http://localhost:8080/genres';
  }

  public genreList(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genreUrl, {
      headers: this.authService.createAuthorizationHeader()
    });
  }

  public addGenre(genre: Genre){
    return this.http.post(this.genreUrl, genre, {
      headers: this.authService.createAuthorizationHeader()
    });
  }

  deleteGenre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.genreUrl}/id/${id}`, {
      headers: this.authService.createAuthorizationHeader()
    });
  }

  updateGenre(id: number, genreDTO: any): Observable<void> {
    return this.http.patch<void>(`${this.genreUrl}/id/${id}`,genreDTO, {
      headers: this.authService.createAuthorizationHeader()
    });
  }
}
