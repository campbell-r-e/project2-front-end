import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { UserLogin } from '../models/user-login.model';
import { usersignup } from '../models/user-signup.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/api/auth/login'; 
  private signupUrl = 'http://localhost:3000/feed/signup'; // Adjust to your backend route
  public loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(user: UserLogin): Observable<any> {
    return this.http.post(this.loginUrl, user).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('auth_token', response.token);
          localStorage.setItem('username', response.user?.username); 
          localStorage.setItem('userId', response.user?.userId);     
          this.loggedIn.next(true);
        }
      })
    );
  }

  signup(user: usersignup): Observable<any> {
    return this.http.post(this.signupUrl, user).pipe(
     
    );
  }
}
