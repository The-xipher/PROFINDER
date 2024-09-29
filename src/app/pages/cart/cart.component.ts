import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'], 
  imports:[NgIf,NgFor,FormsModule]// Corrected to styleUrls instead of styleUrl
})
export class CartComponent implements OnInit {
  bookings: any[] = []; // Store bookings
  backendUrl: string = 'http://localhost:8080/api/reviews'; // Backend URL for reviews

  constructor(
    private bookingService: BookingService,
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Check if user is logged in
    if (this.authService.getToken() == null) {
      alert('Please log in to view your cart.');
      console.log("Please log in."); 
      this.router.navigate(['/auth']); // Navigate to authentication page
      return; // Return if user is not logged in
    }
    this.fetchBookings(); // Fetch user bookings
  }

  fetchBookings(): void {
    this.bookingService.getUserBookings().subscribe({
      next: (data: any[]) => {
        this.bookings = data.map(booking => ({ // Initialize review object for each booking
          ...booking,
          review: { rating: null, description: '' }, // Initialize review properties
          showReviewModal: false // Control the visibility of the review modal
        }));
      },
      error: (error) => {
        console.error('Error fetching bookings:', error);
        alert('There was an error fetching your bookings. Please try again.'); // Error handling
      }
    });
  }

  // Method to submit a review
  submitReview(bookingId: number, rating: number, description: string): void {
    const userId = this.authService.getUserId(); // Get the user ID from AuthService
    const reviewPayload = {
      user: { id: userId }, // Set the user ID
      professional: { id: 1 }, // Set this as needed or retrieve dynamically
      service: { id: bookingId }, // Assuming booking ID corresponds to service ID
      rating,
      description
    };

    this.http.post(this.backendUrl, reviewPayload).subscribe({
      next: () => {
        alert('Review submitted successfully!');
        this.fetchBookings(); // Refresh bookings to show the new review
      },
      error: (error) => {
        console.error('Error submitting review:', error);
        alert('There was an error submitting your review. Please try again.');
      }
    });
  }

  // Open review modal
  openReviewModal(booking: any): void {
    booking.showReviewModal = true; // Show the review modal
  }

  // Close review modal
  closeReviewModal(booking: any): void {
    booking.showReviewModal = false; // Hide the review modal
  }
}
