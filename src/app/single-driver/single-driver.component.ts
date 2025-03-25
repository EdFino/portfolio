import { Component, OnInit } from '@angular/core';
import { Driver } from '../models/driver';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { DriversService } from '../services/drivers-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-driver',
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    UpperCasePipe,
    DatePipe,
    RouterLink,

  ],
  templateUrl: './single-driver.component.html',
  styleUrl: './single-driver.component.scss'
})
export class SingleDriverComponent implements OnInit {

    driver! : Driver;

    snapButtonText!: string;
    snapOrNotSnap!: boolean;

    constructor (private driverService: DriversService,
                private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.snapButtonText = "Oh snap";
        this.snapOrNotSnap = true;

        const driverID = this.route.snapshot.params['id'];
        this.driver = this.driverService.getDriverById(driverID);
    }

    onChangeSnap() :void {
        if (this.snapOrNotSnap) {
            this.snap();
        } else {
            this.unSnap();
        }

    }

    snap() :void {
        this.driverService.driverById(this.driver.id, 'snap');
        this.snapOrNotSnap = false;
        this.snapButtonText = "Oh unsnap";
    }

    unSnap() :void {
        this.driverService.driverById(this.driver.id, 'unsnap');
        this.snapOrNotSnap = true;
        this.snapButtonText = "Oh snap";
    }
}
