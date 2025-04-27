import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

  isHomePage(): boolean {
    return this.router.url === '/' || this.router.url === '';
  }
}
