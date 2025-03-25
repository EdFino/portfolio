import { Component, Input, OnInit } from '@angular/core';
import { Driver } from '../models/driver';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { DriversService } from '../services/drivers-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,

  ],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.scss'
})
export class DriverComponent {

    @Input () driver! : Driver;

    constructor (private router: Router) {}

    onViewDriver() {
        this.router.navigateByUrl(`driver/${this.driver.id}`)
    }
}
