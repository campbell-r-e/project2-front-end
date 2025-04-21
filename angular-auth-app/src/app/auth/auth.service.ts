import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth/login'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  login(user: UserLogin): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
