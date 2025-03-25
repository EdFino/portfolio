import { Routes } from '@angular/router';
import { DriverListComponent } from './driver-list/driver-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleDriverComponent } from './single-driver/single-driver.component';

export const routes: Routes = [
    {path: 'driver/:id', component: SingleDriverComponent},
    {path: 'driver', component : DriverListComponent},
    {path: '', component: LandingPageComponent}
];
