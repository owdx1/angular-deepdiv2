import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTicket } from '../../../../lib/types';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket-form',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  templateUrl: './new-ticket-form.component.html',
  styleUrl: './new-ticket-form.component.css'
})
export class NewTicketFormComponent {
  newTicket: newTicket = {
    title: "",
    desc: ""
  }
}
