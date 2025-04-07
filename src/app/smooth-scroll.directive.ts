import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[appSmoothScroll]',
  })
  export class SmoothScrollDirective {
    constructor(private el: ElementRef) {
      console.log('SmoothScrollDirective active sur', el.nativeElement);  // Affiche l'élément
    }
  
    @HostListener('click', ['$event'])
    onClick(event: Event) {
      event.preventDefault();
      const targetId = this.el.nativeElement.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }