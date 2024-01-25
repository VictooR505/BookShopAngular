import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = ['http://localhost:8080/']

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signup(signupRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "sign-up", signupRequest)
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "authenticate", loginRequest)
  }

  public createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('JWT');
    const headers = new HttpHeaders();
    if (jwtToken) {
      return headers.set(
        'Authorization', 'Bearer ' + jwtToken
      )
    }
    console.error("JWT token not found in the Local Storage");
    return headers;
  }

}
