import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { ProfessionalService } from '../../services/professional.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
  ],
})
export class DashboardComponent implements OnInit {
  profid: number | null = null;
  userId: number | null = null;
  profileData: any = null; // To store the response data
  name: string = ''; // Will be assigned after fetching profile data
  professionDetails: string = ''; // Profession details will be assigned after fetching professional data
  isAvailable = true; // Toggle for availability
  schedule = { startTime: '', endTime: '' }; 
  availableSlots: Set<string> = new Set(); // Schedule data
  bookings: any[] = []; // Initialize bookings array

  constructor(private http: HttpClient, private authService: AuthService, private professionalService: ProfessionalService, private router: Router) {}

  ngOnInit(): void {
    this.profid = this.authService.getProfessionalId();
    this.userId = this.authService.getUserId(); // Retrieve the user ID from AuthService
    if (this.userId !== null) {
      this.getUserProfile(this.userId);
      this.getProfessionalDetails(this.userId); // Fetch professional details as well
      this.getBookings(this.profid); // Fetch bookings using professional ID
    } else {
      console.error('User ID is null!');
      alert("Please log in to access these.");
      this.router.navigate(['/auth']);
    }
  }

  getUserProfile(userId: number): void {
    const apiUrl = `http://localhost:9998/auth/${userId}`;

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log('Profile data fetched successfully', response);
        this.profileData = response; // Store response data
        this.name = this.profileData.firstName; // Assign name after data is fetched
      },
      (error) => {
        console.error('Error fetching profile data', error);
      }
    );
  }

  getProfessionalDetails(userId: number): void {
    const apiUrl = `http://localhost:8080/api/professionals/${userId}`;

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log('Professional details fetched successfully', response);
        this.professionDetails = response.professionDetails;
        this.authService.setProfessionalId(response.id); // Update professionDetails with the fetched data
      },
      (error) => {
        console.error('Error fetching professional details', error);
      }
    );
  }

  getBookings(profid: number | null): void {
    if (profid) {
      const apiUrl = `http://localhost:8080/api/bookings/${profid}`; // Adjust the API URL as needed

      this.http.get(apiUrl).subscribe(
        (response: any) => {
          console.log('Bookings fetched successfully', response);
          this.bookings = response; // Store fetched bookings
        },
        (error) => {
          console.error('Error fetching bookings', error);
        }
      );
    }
  }

  saveSchedule() {
    if (this.schedule.startTime && this.schedule.endTime) {
      const startSlot = new Date(this.schedule.startTime).toISOString(); // Convert to ISO string
      const endSlot = new Date(this.schedule.endTime).toISOString(); // Convert to ISO string
      this.availableSlots.add(startSlot);
      this.availableSlots.add(endSlot); // Add the selected slot to available slots

      this.professionalService.updateSchedule(this.availableSlots).subscribe(
        response => {
          console.log('Schedule updated successfully', response);
          alert("Schedule updated successfully!");
          // Optionally reset or handle after success
        },
        error => {
          console.error('Error updating schedule', error);
        }
      );
    } else {
      console.warn('Start and end time must be selected!');
    }
  }
}
