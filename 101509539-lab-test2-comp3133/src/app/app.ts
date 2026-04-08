import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="nav-brand">
        <span class="rocket-icon">🚀</span>
        <span class="brand-text">SpaceX Mission Tracker</span>
      </div>
      <div class="nav-links">
        <a routerLink="/missions" routerLinkActive="active">Mission List</a>
        <a routerLink="/filter" routerLinkActive="active">Filter by Year</a>
      </div>
    </nav>
    <main class="main-content">
      <router-outlet />
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  title = '101509539-lab-test2-comp3133';
}
