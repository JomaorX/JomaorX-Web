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
    document.body.classList.toggle('dark-theme', this.darkTheme);
    localStorage.setItem('darkTheme', this.darkTheme.toString());
  }

  constructor() {
    const savedTheme = localStorage.getItem('darkTheme');
    this.darkTheme = savedTheme ? JSON.parse(savedTheme) : false;
    document.body.classList.toggle('dark-theme', this.darkTheme);
  }
}
