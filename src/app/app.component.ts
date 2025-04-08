import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MyprojectsComponent } from "./myprojects/myprojects.component";
import { MystackComponent } from "./mystack/mystack.component";
import { ContactFormComponent } from "./contactform/contactform.component";
import { StickyNavbarComponent } from "./sticky-navbar/sticky-navbar.component";

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    HeaderComponent,
    RouterOutlet,
    MyprojectsComponent,
    MystackComponent,
    ContactFormComponent,
    StickyNavbarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
