import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Ticket } from '../../../../lib/types';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input({ required: true }) ticket!: Ticket;
  @Output() ticketComplete = new EventEmitter();

  detailsVisible = signal(false);

  completeTicket = () => {
    this.ticketComplete.emit();
  }
}
