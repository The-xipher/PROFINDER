import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  standalone: true,
  imports: [CommonModule] // Include CommonModule in imports
})
export class FaqComponent {
  faqs = [
    { question: 'What is this service?', answer: 'This service connects users with local service providers.', isOpen: false },
    { question: 'How do I become a service provider?', answer: 'You can sign up through the registration form and start offering your services.', isOpen: false },
    { question: 'What types of services can I offer?', answer: 'You can offer a variety of services, including home repairs, cleaning, tutoring, and more.', isOpen: false },
    { question: 'How do I get paid?', answer: 'Payments are processed through our secure payment gateway.', isOpen: false },
    { question: 'Can I update my service details?', answer: 'Yes, you can update your service details through your provider dashboard.', isOpen: false }
  ];

  toggleAnswer(faq: { isOpen: boolean }) {
    faq.isOpen = !faq.isOpen;
  }
}
