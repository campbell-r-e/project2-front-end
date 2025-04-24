import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-auth-app';


constructor(private router: Router) {}

goToLogin() {
  this.router.navigate(['/login']);
}
goToSignup() {
  this.router.navigate(['/signup']);
}
}
