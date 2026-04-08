import { Component, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SpacexapiService } from '../network/spacexapi';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent implements OnInit {
  yearControl = new FormControl('');
  missions = signal<Mission[]>([]);
  loading = signal(false);
  searched = signal(false);
  error = signal('');

  years: string[] = [];

  constructor(private spacexService: SpacexapiService) {}

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let y = 2006; y <= currentYear; y++) {
      this.years.push(String(y));
    }
  }

  search(): void {
    const year = this.yearControl.value;
    if (!year) return;
    this.loading.set(true);
    this.error.set('');
    this.searched.set(true);
    this.spacexService.getLaunchesByYear(year).subscribe({
      next: (data) => {
        this.missions.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to fetch launches for this year.');
        this.loading.set(false);
      }
    });
  }

  getStatusClass(success: boolean | null): string {
    switch (success) {
      case true: return 'success';
      case false: return 'failure';
      default: return 'unknown';
    }
  }
}
