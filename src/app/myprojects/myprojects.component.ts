import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeService } from '../services/theme-service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-myprojects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.scss'
})
export class MyprojectsComponent {

    projectDescriptions: { TITLE: string; TECHNOLOGIES: string[]; SUMMARY: string }[] = [];

    currentTitle = '';
    currentSummary = '';
    currentTechnologies: string[] = [];

    constructor(private themeService: ThemeService, private translate: TranslateService) {

        this.loadTransitions();
        this.translate.onLangChange.subscribe(() => {
            this.loadTransitions();
        })
    }

    loadTransitions(): void {
        this.translate.get('PROJECTS').subscribe(projects => {
            this.currentTitle = projects.DEFAULT_TITLE;
            this.currentSummary = projects.DEFAULT_TEXT;
            this.projectDescriptions = projects.LIST;
            this.currentTechnologies = projects.LIST?.[0]?.technologies ?? [];
        });
    }
    
        updateDescription(index: number): void {
          const project = this.projectDescriptions[index];
          if (project) {
            this.currentTitle = project.TITLE;
            this.currentTechnologies = project.TECHNOLOGIES;
            this.currentSummary = project.SUMMARY;
          }
        }

        getTechnologiesImage(technology: string): string {
            const whatIsTheme = this.themeService.isDarkMode() ? 'dark-theme' : 'light-theme';
            return `/assets/images/logos/${whatIsTheme}/${technology}.png`;
        };
    }