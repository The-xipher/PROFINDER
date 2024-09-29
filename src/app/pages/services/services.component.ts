import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule for hyperlinks
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  imports: [CommonModule, RouterModule] // Add CommonModule and RouterModule for standalone setup
})
export class ServicesComponent {
  popularServices = [
    { 
      title: 'Home Cleaning', 
      image: 'https://via.placeholder.com/150' // Placeholder for Home cleaning
    },
    { 
      title: 'Furniture Assembly', 
      image: 'https://via.placeholder.com/150' // Placeholder for Furniture assembly
    },
    { 
      title: 'Plumbing Service', 
      image: 'https://via.placeholder.com/150' // Placeholder for Plumbing service
    },
    { 
      title: 'Electrical Service', 
      image: 'https://via.placeholder.com/150' // Placeholder for Electrical service
    },
    { 
      title: 'Smart Home Service', 
      image: 'https://via.placeholder.com/150' // Placeholder for Smart home service
    },
    { 
      title: 'Moving Service', 
      image: 'https://via.placeholder.com/150' // Placeholder for Moving service
    },
    { 
      title: 'Tutoring', 
      image: 'https://via.placeholder.com/150' // Placeholder for Moving service
    },
    { 
      title: 'Landscaping', 
      image: 'https://via.placeholder.com/150' // Placeholder for Moving service
    },
    { 
      title: 'Home Repair', 
      image: 'https://via.placeholder.com/150' // Placeholder for Moving service
    },
    { 
      title: 'Home Renovation', 
      image: 'https://via.placeholder.com/150' // Placeholder for Moving service
    },
    { 
      title: 'Personal Care', 
      image: 'https://via.placeholder.com/150' // Placeholder for Moving service
    },
    { 
      title: 'Painting', 
      image: 'https://via.placeholder.com/150' // Placeholder for Moving service
    },
  ];

  cleaningServices = [
    { 
      title: 'Home Cleaning', 
      image: 'https://via.placeholder.com/150' // Placeholder for Home cleaning
    },
    { 
      title: 'Office Cleaning', 
      image: 'https://via.placeholder.com/150' // Placeholder for Office cleaning
    },
    { 
      title: 'Rental Home Cleaning', 
      image: 'https://via.placeholder.com/150' // Placeholder for Rental home cleaning
    }
  ];

  categories = [
    { name: 'Popular', link: '/services' },
    { name: 'Cleaning', link: '/services' },
    { name: 'TV and Electronics', link: '#tv-electronics' },
    { name: 'Assembly', link: 'services/service-detail/Furniture Assembly' },
    { name: 'General Handyman', link: '#handyman' },
    { name: 'Plumbing', link: 'services/service-detail/Plumbing Service' },
    { name: 'Electrical', link: 'services/service-detail/Electrical Service' },
    { name: 'Painting', link: 'services/service-detail/Painting' },
    { name: 'Moving', link: 'services/service-detail/Moving Service' },
    { name: 'Smart Home', link: 'services/service-detail/Smart Home Service' },
    { name: 'Window Treatments', link: '#window-treatments' }
  ];
  
  constructor(private router: Router) { }

  viewServiceDetail(service: any) {
    this.router.navigate(['/services/service-detail', service.title]);  // Pass the service title as a parameter
  }
}
