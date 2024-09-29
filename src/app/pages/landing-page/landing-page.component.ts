import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router to navigate
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone: true,
  imports: [FormsModule, NgFor, NgClass,NgIf]
})
export class LandingPageComponent {
  searchTerm: string = ''; // Holds user input for search
  filteredCategories: any[] = []; // Holds matching search results

  categories = [
    { name: 'Home Cleaning', icon: 'fa-broom' },
    { name: 'Home Repair', icon: 'fa-tools' },
    { name: 'Tutoring', icon: 'fa-book-reader' },
    { name: 'Personal Care', icon: 'fa-spa' },
    // Add more categories with corresponding FontAwesome icons
  ];

  Services = [
    { 
      title: 'Home Cleaning' 
        },
    { 
      title: 'Furniture Assembly' 
    },
    { 
      title: 'Plumbing Service' 
    },
    { 
      title: 'Electrical Service'
        },
    { 
      title: 'Smart Home Service', 
    },
    { 
      title: 'Moving Service', 
    },
    { 
      title: 'Tutoring', 
    },
    { 
      title: 'Landscaping', 
    },
    { 
      title: 'Home Repair', 
    },
    { 
      title: 'Home Renovation', 
    },
    { 
      title: 'Personal Care', 
    },
    { 
      title: 'Painting', 
    },
  ];

  constructor(private router: Router) {} // Inject Router

  // Filter categories based on search input
  onSearch() {
    this.filteredCategories = this.Services.filter(Services =>
      Services.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Navigate to the service detail page
  navigateToService(serviceName: string) {
    this.router.navigate(['/services/service-detail', serviceName]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  navigateToPage(pageName: string) {
    this.router.navigate([pageName]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Execute search when user clicks search button
  searchService() {
    if (this.filteredCategories.length > 0) {
      this.navigateToService(this.filteredCategories[0].name); // Navigate to the first result
    }
  }
}
