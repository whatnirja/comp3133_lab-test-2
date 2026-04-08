import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpacexapiService } from '../network/spacexapi';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './missionlist.html',
  styleUrl: './missionlist.css'
})
export class MissionlistComponent implements OnInit {
  missions = signal<Mission[]>([]);
  loading = signal(true);
  error = signal('');

  constructor(private spacexService: SpacexapiService) {}

  ngOnInit(): void {
    this.spacexService.getAllLaunches().subscribe({
      next: (data) => {
        this.missions.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load missions. Please try again.');
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
