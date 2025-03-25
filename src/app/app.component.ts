import { Component, OnInit } from '@angular/core';
import { DriverComponent } from './driver/driver.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
