import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [NgIf, NgFor, FormsModule, CommonModule]
})
export class CartComponent implements OnInit {
  bookings: any[] = []; 
  backendUrl: string = 'http://localhost:8080/reviews'; 

  constructor(
    private bookingService: BookingService,
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.getToken() == null) {
      alert('Please log in to view your cart.');
      this.router.navigate(['/auth']);
      return;
    }
    this.fetchBookings(); 
  }

  fetchBookings(): void {
    this.bookingService.getUserBookings().subscribe({
      next: (data: any[]) => {
        this.bookings = data.map(booking => ({
          ...booking,
          review: { rating: null, description: '' }, 
          showReviewModal: false 
        }));
      },
      error: (error) => {
        console.error('Error fetching bookings:', error);
        alert('There was an error fetching your bookings. Please try again.');
      }
    });
  }

  isReviewValid(booking: any): boolean {
    return booking.review.rating && booking.review.description;
  }

  submitReview(booking: any): void {
    if (!this.isReviewValid(booking)) {
      alert('Please provide a rating and review description before submitting.');
      return;
    }

    const userId = this.authService.getUserId(); 
    const serviceId = booking.serviceId; // Directly get the service ID from booking
    const professionalId = booking.serviceProviderId; // Use serviceProviderId as professionalId

    // Validate IDs before submission
    if (!serviceId) {
      alert('Service ID is missing. Cannot submit review.');
      return;
    }
    
    const reviewPayload = {
      user: { id: userId }, 
      professional: { id: professionalId }, 
      service: { id: serviceId }, 
      rating: booking.review.rating, 
      description: booking.review.description 
    };

    this.http.post(this.backendUrl, reviewPayload).subscribe({
      next: () => {
        alert('Review submitted successfully!');
        this.fetchBookings(); 
      },
      error: (error) => {
        console.error('Error submitting review:', error);
        alert('There was an error submitting your review. Please try again.');
      }
    });
  }

  openReviewModal(booking: any): void {
    booking.showReviewModal = true; 
  }

  closeReviewModal(booking: any): void {
    booking.showReviewModal = false; 
  }
}
