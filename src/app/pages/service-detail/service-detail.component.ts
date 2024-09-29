import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { loadStripe } from '@stripe/stripe-js';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, CommonModule]
})
export class ServiceDetailComponent {
  serviceDetail: any;
  serviceDate: string = '';
  orderQuantity: number = 1; // For storing the selected date

  // Combined service details including placeholder image, reviews, and description
  services = [
    {
      title: 'Home Cleaning',
      description: 'Professional home cleaning services to make your home shine.',
      price: 12000,
      image: 'https://via.placeholder.com/600x400',
      reviews: [
        { reviewer: 'John Doe', comment: 'Excellent service!', rating: 5 },
        { reviewer: 'Jane Smith', comment: 'Very satisfied!', rating: 4 },
        { reviewer: 'Amarnath Kendre', comment: 'Good!', rating: 3 }
      ]
    },
    {
      title: 'Furniture Assembly',
      description: 'Get professional help to assemble your furniture quickly and efficiently.',
      price: 9000,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { reviewer: 'Michael', comment: 'Fast and efficient.', rating: 5 },
        { reviewer: 'Alice', comment: 'Very professional.', rating: 4 }
      ]
    },
    {
      title: 'Plumbing Service',
      description: 'Expert plumbing service to resolve any pipe or water-related issues.',
      price: 15000,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { reviewer: 'Rachel', comment: 'Solved my plumbing issue in no time!', rating: 5 },
        { reviewer: 'Monica', comment: 'Very reliable.', rating: 4 }
      ]
    },
    {
      title: 'Electrical Service',
      description: 'Certified electricians available to handle all your electrical needs.',
      price: 13000,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { reviewer: 'Ross', comment: 'Fixed my circuit issues efficiently.', rating: 5 },
        { reviewer: 'Chandler', comment: 'Very knowledgeable.', rating: 4 }
      ]
    },
    {
      title: 'Smart Home Service',
      description: 'Upgrade your home with smart devices and automation solutions.',
      price: 20000,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { reviewer: 'Phoebe', comment: 'My house is so smart now!', rating: 5 },
        { reviewer: 'Joey', comment: 'The tech was easy to use.', rating: 4 }
      ]
    },
    {
      title: 'Moving Service',
      description: 'Let professionals help you move to your new home with ease.',
      price: 18000,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { reviewer: 'Gunther', comment: 'Made my moving day stress-free.', rating: 5 },
        { reviewer: 'Janice', comment: 'Very careful with my items.', rating: 4 }
      ]
    },
    // New services added
    {
      title: 'Home Repair',
      description: 'Get expert help for all your home repair needs.',
      price: 15000,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { reviewer: 'Sarah', comment: 'Quick and effective repair service.', rating: 5 },
        { reviewer: 'Tom', comment: 'Very reliable repair work.', rating: 4 }
      ]
    },
    {
      title: 'Home Renovation',
      description: 'Transform your home with professional renovation services.',
      price: 30000,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { reviewer: 'Linda', comment: 'Beautiful renovation, very happy!', rating: 5 },
        { reviewer: 'David', comment: 'Great attention to detail.', rating: 4 }
      ]
    },
    {
      title: 'Tutoring',
      description: 'Expert tutoring services for various subjects and levels.',
      price: 6000,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { reviewer: 'Emma', comment: 'Very helpful and knowledgeable tutor.', rating: 5 },
        { reviewer: 'Liam', comment: 'Improved my grades significantly.', rating: 4 }
      ]
    },
    {
      title: 'Personal Care',
      description: 'Professional personal care services including grooming and wellness.',
      price: 8000,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { reviewer: 'Olivia', comment: 'Exceptional personal care services.', rating: 5 },
        { reviewer: 'Ethan', comment: 'Very satisfied with the service.', rating: 4 }
      ]
    },
    {
      title: 'Landscaping',
      description: 'Create beautiful outdoor spaces with expert landscaping services.',
      price: 25000,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { reviewer: 'Sophia', comment: 'Our garden looks amazing now!', rating: 5 },
        { reviewer: 'Mason', comment: 'Great job with the landscaping.', rating: 4 }
      ]
    },
    {
      title: 'Painting',
      description: 'Paint Your Homes Beautiful.',
      price: 25000,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { reviewer: 'Andrei', comment: 'Our Home looks amazing now!', rating: 5 },
        { reviewer: 'Luffy', comment: 'Great job with the colors.', rating: 4 }
      ]
    },
  ];

  cleaningServices = [
    {
      title: 'Home Cleaning',
      description: 'Professional home cleaning services to make your home shine.',
      price: 12000,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { reviewer: 'John Doe', comment: 'Excellent service!', rating: 5 },
        { reviewer: 'Jane Smith', comment: 'Very satisfied!', rating: 4 }
      ]
    },
    {
      title: 'Office Cleaning',
      description: 'Office cleaning to ensure a hygienic work environment for your team.',
      price: 10000,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { reviewer: 'CEO', comment: 'Our office looks spotless!', rating: 5 },
        { reviewer: 'HR Manager', comment: 'Highly recommend.', rating: 4 }
      ]
    },
    {
      title: 'Rental Home Cleaning',
      description: 'Thorough cleaning of your rental property to prepare it for new tenants.',
      price: 14000,
      image: 'https://via.placeholder.com/150',
      reviews: [
        { reviewer: 'Landlord', comment: 'Great service, highly recommend!', rating: 5 },
        { reviewer: 'Property Manager', comment: 'Efficient and thorough.', rating: 4 }
      ]
    }
  ];

  backendUrl: string = 'http://localhost:3000/api';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private authService: AuthService, private bookingService: BookingService) {
    // Extract the service title from the URL
    const serviceTitle = this.route.snapshot.paramMap.get('title');
    this.serviceDetail = this.services.concat(this.cleaningServices).find(service => service.title === serviceTitle);
  }

  // Method to get filled stars based on rating
  getStars(rating: number) {
    return new Array(rating);
  }

  // Method to get empty stars based on rating
  getEmptyStars(rating: number) {
    return new Array(5 - rating);
  }

  // Check if the selected date is today or in the future
  isDateValid(): boolean {
    const selectedDate = new Date(this.serviceDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to the start of the day
    return selectedDate >= today;
  }

  // Method to handle "Order Now" button
  async placeOrder() {
    if (!this.serviceDate) {
      alert('Please select a date before placing your order.');
    } else if (!this.isDateValid()) {
      alert('Please select a present or future date.');
    } else if (this.authService.getToken() === null) {
      alert('Please log in to place an order.');
      this.router.navigate(['/auth']);
    } else {
      // Proceed to create a Stripe Checkout session
      this.bookingService.setBookingDetails(
        this.serviceDate,
        this.serviceDetail.price,
        this.serviceDetail.title
      );
      console.log('Booking details after setting:', this.bookingService.getBookingDetails());
       await this.createCheckoutSession();
    }
  }

  async createCheckoutSession() {
    const payload = {
      title: this.serviceDetail.title,
      quantity: this.orderQuantity,
      serviceDate: this.serviceDate,
    };

    this.http.post<{ id: string }>(`${this.backendUrl}/checkout`, payload)
      .subscribe({
        next: async (response) => {
          try {
            // Store booking details in local storage
            localStorage.setItem('bookingDetails', JSON.stringify({
              serviceDate: this.serviceDate,
              price: this.serviceDetail.price,
              description: this.serviceDetail.title
            }));

            // Initialize Stripe asynchronously
            const stripe = await loadStripe('pk_test_51Q0H1aP3oMjdzaC3E7zAjR8bYLg9a0FTj82tJPr82TlLFDSMzLG9TsxACSAvwc71jfp40yYyaoMv7QF0omtEhDaB009yXRVueU');

            if (!stripe) {
              throw new Error('Stripe failed to load.');
            }

            // Redirect to Stripe Checkout
            const { error } = await stripe.redirectToCheckout({
              sessionId: response.id,
            });

            if (error) {
              alert(`Stripe error: ${error.message}`);
            }
          } catch (error) {
            console.error('Error in Stripe checkout:', error);
            alert('There was an error processing your order. Please try again.');
          }
        },
        error: (error) => {
          console.error('Error creating checkout session:', error);
          alert('There was an error processing your order. Please try again.');
        },
      });
  }
}
