import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkThemeKey = 'dark-theme';

  private darkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem(this.darkThemeKey);
    const isDark = savedTheme === 'true';

    this.setDarkTheme(isDark);
  }

  isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }

  toggleTheme(): void {
    this.setDarkTheme(!this.isDarkMode());
  }

  private setDarkTheme(isDark: boolean): void {
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem(this.darkThemeKey, String(isDark));
    this.darkModeSubject.next(isDark);
  }
}
