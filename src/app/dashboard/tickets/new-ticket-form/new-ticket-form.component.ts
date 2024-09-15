import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTicket } from '../../../../lib/types';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket-form',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  templateUrl: './new-ticket-form.component.html',
  styleUrl: './new-ticket-form.component.css',
})
export class NewTicketFormComponent {

  @ViewChild('form') form?: ElementRef<HTMLFormElement>

  @Output() addTicket = new EventEmitter<newTicket>();

  newTicket: newTicket = {
    title: "",
    desc: ""
  }

  onSubmit = () => {
    if(this.newTicket.title && this.newTicket.desc) {
      this.addTicket.emit(this.newTicket)
      console.log("submitted.")
      this.form?.nativeElement.reset()
    }
  }
}
