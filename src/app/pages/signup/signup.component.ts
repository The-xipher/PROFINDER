import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [NgClass, NgIf, ReactiveFormsModule]
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required], // Added confirmPassword field
      address: [''], // Added address field
      role: ['USER'],
      phoneNo: ['', [Validators.pattern('^[0-9]{10}$')]]
    }, { validator: this.checkPasswords }); // Added custom validator for password matching
  }

  // Custom validator to check if password and confirm password match
  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notSame: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const apiUrl = 'http://localhost:9998/auth/signup';
      const apiUrll = 'http://localhost:8080/api/users/register';
      
      // Collect user credentials for signup
      const userCredentials = {
        username: this.signupForm.get('email')?.value,
        password: this.signupForm.get('password')?.value,
        address:this.signupForm.get('address')?.value,
        role: this.signupForm.get('role')?.value
      };
      
      // Register the user with the backend
      this.http.post(apiUrll, userCredentials).subscribe(
        (response) => {
          console.log('User registered successfully', response);
          // Handle successful registration (e.g., navigate to another page)
        },
        (error) => {
          console.error('Error occurred during registration', error);
          // Handle error (e.g., show an error message)
        }
      );

      // Sign up the user via another backend API
      this.http.post(apiUrl, this.signupForm.value).subscribe(
        (response: any) => {
          console.log('User signed up successfully', response);
          alert("User Registration is Successful!");
          this.router.navigate(['LogIn']); // Navigate to the login page on success
        },
        (error: any) => {
          console.error('Error occurred during sign-up', error);
          alert("User Registration Failed. Try again!");
        }
      );
    }
  }

  get firstName() {
    return this.signupForm.get('firstName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  get address() {
    return this.signupForm.get('address');
  }

  get phoneNo() {
    return this.signupForm.get('phoneNo');
  }
}
