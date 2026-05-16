import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private document = inject(DOCUMENT);

  isDarkMode = signal(false);

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode.set(true);
      this.document.body.classList.add('dark-theme');
    }
  }

  toggleTheme() {
    this.isDarkMode.update((value) => !value);

    if (this.isDarkMode()) {
      this.document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      this.document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
