import { Component } from '@angular/core';
import { NewTicketFormComponent } from './new-ticket-form/new-ticket-form.component';
import { TicketComponent } from './ticket/ticket.component';
import { newTicket, Ticket } from '../../../lib/types';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketFormComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {

  tickets: Ticket[] = [
    {
      id: "ticket1",
      title: "deneme ticketi",
      desc: "no problem",
      date: new Date(),
      isComplete: true
    },
    {
      id: "ticket2",
      title: "deneme ticketi2",
      desc: "no problem2",
      date: new Date(),
      isComplete: false
    }
  ]

  handleAddTicket = (newTicket: newTicket) => {
    this.tickets.push({
      ...newTicket,
      id: `ticket${this.tickets.length + 1}`,
      date: new Date(),
      isComplete: false
    })
  }

  handleTicketComplete(id: string) {
    const idx = this.tickets.findIndex((ticket) => ticket.id === id)

    if(idx !== -1) {
      this.tickets[idx].isComplete = true
    }
  }
}
