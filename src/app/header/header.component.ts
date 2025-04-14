import { Component } from '@angular/core';
import { SmoothScrollDirective } from '../smooth-scroll.directive';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '../services/theme-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SmoothScrollDirective,
    MatSlideToggleModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

    export class HeaderComponent {

    constructor(public themeService: ThemeService) {}
    toggleTheme(): void {
        this.themeService.toggleTheme();
    }
}
