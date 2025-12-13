import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkTheme = false;

  isDarkTheme(): boolean {
    return this.darkTheme;
  }

  toggleTheme(): void {
    this.darkTheme = !this.darkTheme;
    this.applyTheme();
    localStorage.setItem('darkTheme', this.darkTheme.toString());
  }

  constructor() {
    const savedTheme = localStorage.getItem('darkTheme');

    if (savedTheme !== null) {
      this.darkTheme = JSON.parse(savedTheme);
    } else {
      // Auto-detect system preference
      this.darkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    this.applyTheme();

    // Listen for system changes (only applies if user hasn't manually overridden)
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (localStorage.getItem('darkTheme') === null) {
          this.darkTheme = event.matches;
          this.applyTheme();
        }
      });
    }
  }

  private applyTheme(): void {
    document.body.classList.toggle('dark-theme', this.darkTheme);
  }
}
