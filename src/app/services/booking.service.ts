// booking.service.ts
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private backendUrl: string = 'http://localhost:8080/api/bookings'; // Your backend URL
  private bookingDate: string = '';
  private bookingPrice: number = 0;
  private bookingDescription: string = '';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Set booking details
  setBookingDetails(date: string, price: number, description: string): void {
    this.bookingDate = date;
    this.bookingPrice = price;
    this.bookingDescription = description;
    console.log('Booking details set:', this.getBookingDetails());
  }

  // Get booking details
  getBookingDetails() {
    const details = {
      date: this.bookingDate,
      price: this.bookingPrice,
      description: this.bookingDescription,
    };
    console.log('Booking details retrieved:', details);
    return details;
  }

  // Clear booking details
  clearBookingDetails(): void {
    this.bookingDate = '';
    this.bookingPrice = 0;
    this.bookingDescription = '';
  }

  // Get user bookings
  getUserBookings(): Observable<any[]> {
    const userId = this.authService.getUserId(); // Get the user ID from AuthService
    return this.http.get<any[]>(`${this.backendUrl}/user/${userId}`);
  }
}