import { Component, OnInit } from '@angular/core';
import { Driver } from '../models/driver';
import { DriverComponent } from '../driver/driver.component';
import { DriversService } from '../services/drivers-service';

@Component({
  selector: 'app-driver-list',
  imports: [DriverComponent],
  templateUrl: './driver-list.component.html',
  styleUrl: './driver-list.component.scss'
})
export class DriverListComponent implements OnInit {
    allDrivers!: Driver[];

    constructor(private driverservices: DriversService ) {

    }

    ngOnInit(): void {

        this.allDrivers = this.driverservices.getDrivers();

    }

}
