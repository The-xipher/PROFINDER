import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css'],
  standalone: true
})
export class QuoteCardComponent {
  @Input() quote: string = '';
  @Input() profilePic: string = '';
  @Input() name: string = '';
  @Input() description: string = '';
}
