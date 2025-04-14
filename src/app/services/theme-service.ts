import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkThemeKey = 'dark-theme';

  constructor() {
    const savedTheme = localStorage.getItem(this.darkThemeKey);
    if (savedTheme === 'true') {
      this.enableDarkTheme();
    }
  }

  isDarkMode(): boolean {
    return document.body.classList.contains('dark-theme');
  }

  toggleTheme(): void {
    if (this.isDarkMode()) {
      this.disableDarkTheme();
    } else {
      this.enableDarkTheme();
    }
  }

  private enableDarkTheme(): void {
    document.body.classList.add('dark-theme');
    localStorage.setItem(this.darkThemeKey, 'true');
  }

  private disableDarkTheme(): void {
    document.body.classList.remove('dark-theme');
    localStorage.setItem(this.darkThemeKey, 'false');
  }
}
