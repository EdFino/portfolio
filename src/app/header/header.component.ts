import { Component } from '@angular/core';
import { SmoothScrollDirective } from '../smooth-scroll.directive';

@Component({
  selector: 'app-header',
  imports: [
    SmoothScrollDirective,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor() {
        console.log('HeaderComponent chargé');
      }
      

}
