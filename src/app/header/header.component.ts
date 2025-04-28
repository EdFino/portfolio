import { Component } from '@angular/core';
import { SmoothScrollDirective } from '../smooth-scroll.directive';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '../services/theme-service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SmoothScrollDirective,
    MatSlideToggleModule,
    NgIf,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

    export class HeaderComponent {

        currentLang: string;
        

    constructor(public themeService: ThemeService, private translate: TranslateService) {
        this.currentLang = this.translate.currentLang || this.translate.getDefaultLang();

    }
    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

    toggleLanguage(): void {
        const newLang = this.currentLang === 'fr' ? 'en' : 'fr';
        this.translate.use(newLang);  // Utiliser directement la méthode `use` pour changer la langue
        this.currentLang = newLang;  // Mettre à jour l'état local
    }
}
