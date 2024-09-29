import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return this.authService.getToken() !== null; // Return true if token exists
  }

  // Handle sign out
  signOut(): void {
    this.authService.clearToken(); // Clear the token
    this.authService.clearUserId(); // Clear user ID
    this.authService.clearProfessionalId(); // Clear professional ID
    this.router.navigate(['/']); // Navigate to home or any other desired route
  }

  // Navigate to the authentication page
  navigateToAuth(): void {
    this.router.navigate(['/auth']); // Change to your actual auth route
  }
}