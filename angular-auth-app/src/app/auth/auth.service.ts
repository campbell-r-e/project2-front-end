import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { UserLogin } from '../models/user-login.model';
import { usersignup } from '../models/user-signup.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/feed/login'; 
  private signupUrl = 'http://localhost:8080/feed/signup';
  public loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient) {}

  login(user: UserLogin): Observable<any> {
    return this.http.post(this.loginUrl, user).pipe(
      tap((response: any) => {
        if (response.success && response.token) {
          localStorage.setItem('auth_token', response.token);
          localStorage.setItem('username', response.user?.username || '');
          localStorage.setItem('userId', response.user?.userId || '');
          this.loggedIn.next(true);
        } else {
          this.loggedIn.next(false);
          console.warn('Login failed:', response.message);
        }
      })
    );
  }

  signup(user: usersignup): Observable<any> {
    const payload = {
      username: user.username,
      password: user.password
    };

    return this.http.post(this.signupUrl, payload).pipe(
      tap((response: any) => {
        if (response.success && response.token) {
          localStorage.setItem('auth_token', response.token);
          localStorage.setItem('username', response.user?.username || '');
          localStorage.setItem('userId', response.user?.userId || '');
          this.loggedIn.next(true);
        } else {
          this.loggedIn.next(false);
          console.warn('Signup failed:', response.message);
        }
      })
    );
  }
}
