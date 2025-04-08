import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmoothScrollDirective } from '../smooth-scroll.directive';

@Component({
  selector: 'app-sticky-navbar',
  standalone: true,
  imports: [
    CommonModule,
    SmoothScrollDirective,
  ],
  templateUrl: './sticky-navbar.component.html',
  styleUrls: ['./sticky-navbar.component.scss']
})
export class StickyNavbarComponent {

    isNavbarVisible = false;

    @HostListener('window:scroll', [])
  onWindowScroll() {
    const myProjectsSection = document.querySelector('#my-projects');
    if (myProjectsSection) {
      const sectionTop = myProjectsSection.getBoundingClientRect().top;
    console.log('Position de #my-projects :', sectionTop); // Ajoutez ce log
    this.isNavbarVisible = sectionTop <= 0;
    console.log('isNavbarVisible :', this.isNavbarVisible); // Ajoutez ce log
    }
  }

}
