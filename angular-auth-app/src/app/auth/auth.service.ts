import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { UserLogin } from '../models/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth/login'; 
  public loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(user: UserLogin): Observable<any> {
    return this.http.post(this.apiUrl, user).pipe(
      tap((response: any) => {
        if (response.token) {
        
          localStorage.setItem('auth_token', response.token);
          localStorage.setItem('username', response.user.username); 
          localStorage.setItem('userId', response.user.userId);     
          this.loggedIn.next(true);
        }
      })
    );
  }





  
}
