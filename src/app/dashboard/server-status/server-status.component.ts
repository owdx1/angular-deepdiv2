import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent, CommonModule],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online'
  private interval? :ReturnType<typeof setInterval>;

  constructor() { 
    
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval)    
  }

  ngOnInit() { 
    this.interval = setInterval(() => {
      const rnd = Math.random();
      //console.log(rnd)
      if(rnd < 0.5) this.currentStatus = "online"
      else if (rnd < 0.9) this.currentStatus = "offline"
      else {
        this.currentStatus = "unknown"
      } 
      this.currentStatus = this.currentStatus === "online" ? "offline" : "online"
    }, 3000)
  }

}
