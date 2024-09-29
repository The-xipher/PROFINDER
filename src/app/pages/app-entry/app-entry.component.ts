import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entry',
  templateUrl: './app-entry.component.html',
  styleUrls: ['./app-entry.component.css'],
  standalone: true,
  imports: [CommonModule] // Standalone component with CommonModule for basic Angular directives
})
export class AppEntryComponent {
  
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/LogIn']); // Navigates to the login page
  }

  navigateToSignup() {
    this.router.navigate(['/signup']); // Navigates to the signup page
  }
}
