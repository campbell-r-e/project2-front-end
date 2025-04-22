import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { usersignup } from '../../models/user-signup.model';
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const signupData: usersignup = this.signupForm.value;
      this.authService.signup(signupData).subscribe({
        next: (response: any) => {
          console.log('Signup successful:', response);
          // Optionally redirect or show a message
        },
        error: (error) => {
          console.error('Signup error:', error);
        }
      });
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch())]
};
