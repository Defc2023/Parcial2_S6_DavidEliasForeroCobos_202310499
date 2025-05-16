import { Component, OnInit } from '@angular/core';
import { Airline } from '../Airline';
import { AirlineService } from '../airline.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  imports: [CommonModule]
})
export class AirlineListComponent implements OnInit {
  airlines: Airline[] = [];

  constructor(private airlineService: AirlineService) {}

  ngOnInit(): void {
    this.airlineService.getAirlines().subscribe((data) => {
      this.airlines = data;
    });
  }
}
