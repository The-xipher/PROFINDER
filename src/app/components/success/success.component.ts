import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookingService } from '../../services/booking.service'; // Adjust path as needed
import { AuthService } from '../../services/auth.service'; // Adjust path as needed

@Component({
  selector: 'app-success',
  standalone: true,
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  backendUrl: string = 'http://localhost:8080/api/bookings'; // Your backend URL
  bookingDetails: any; // Change to a specific type if you have one

  constructor(
    private bookingService: BookingService,
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve booking details from local storage
    const storedBookingDetails = localStorage.getItem('bookingDetails');
    this.bookingDetails = storedBookingDetails ? JSON.parse(storedBookingDetails) : null;

    console.log('Retrieved booking details:', this.bookingDetails);

    // Check if booking details are available before registering
    if (this.bookingDetails) {
      this.registerBooking();
    } else {
      console.error('No booking details found. Redirecting to service detail page.');
      alert('No booking details found. Please try again.');
      this.router.navigate(['/service-detail']); // Redirect to service detail or an appropriate route
    }
  }

  registerBooking() {
    const userId = this.authService.getUserId(); // Ensure this returns the correct user ID
    const serviceProviderId = 1; // Update this as necessary
    const address = this.authService.getAddress(); // Ensure this retrieves the address
    const { serviceDate, description, price } = this.bookingDetails; // Extract necessary info

    const bookingPayload = {
      userId: userId,
      serviceProviderId: serviceProviderId,
      bookingTime: serviceDate, // Use serviceDate from booking details
      address: address,
      description: description,
      price: price // Include price if necessary
    };

    // Log the payload for debugging purposes
    console.log('Booking payload:', bookingPayload);

    // Make the HTTP POST request to register the booking
    this.http.post(this.backendUrl, bookingPayload).subscribe({
      next: (response) => {
        console.log('Booking registered successfully:', response);
        alert("Booking registered successfully!");
        localStorage.removeItem('bookingDetails'); // Clear booking details from local storage after saving
        this.router.navigate(['/cart']); // Navigate to a different route if needed
      },
      error: (error) => {
        console.error('Error registering booking:', error);
        alert('Failed to register booking. Please try again.');
      }
    });
  }
}