import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { MyprojectsComponent } from "./myprojects/myprojects.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RouterOutlet,
    MyprojectsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
