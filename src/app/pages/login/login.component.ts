import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient, 
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginApiUrl = 'http://localhost:9998/auth/login'; // Login API
      const userIdApiUrl = `http://localhost:8080/api/users/login/${this.loginForm.get('email')?.value}`; // Fetch userId API

      // First API call for login
      this.http.post(loginApiUrl, this.loginForm.value).subscribe(
        (response: any) => {
          console.log('Login successful', response);
          alert("Logged In Successfully");

          const token = response.token; // Assuming the response contains a token
          this.authService.setToken(token);

          // Now fetch the user ID after successful login
          this.http.get(userIdApiUrl).subscribe(
            (userResponse: any) => {
              console.log('User ID fetched successfully', userResponse);
              const userId = userResponse; // Assuming the response contains an `id`
              this.authService.setUserId(userId);

              // Address URL using the fetched userId
              const addressUrl = `http://localhost:8080/api/users/address/${userId}`;

              // Fetch the address
              this.http.get(addressUrl).subscribe(
                (addressResponse: any) => {
                  console.log('User address fetched successfully', addressResponse);
                  this.authService.setAddress(addressResponse.address);
                },
                (addressError) => {
                  console.error('Error fetching user address', addressError);
                }
              );

              // Navigate to the home page after login
              this.router.navigate(['/']);
            },
            (userError) => {
              console.error('Error fetching User ID', userError);
            }
          );
        },
        (error) => {
          console.error('Error during login', error);
          alert("Username or Password is incorrect!");
        }
      );
    }
  }
}
