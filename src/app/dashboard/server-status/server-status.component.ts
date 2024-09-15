import { Component } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent, CommonModule],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus = 'online'
}
