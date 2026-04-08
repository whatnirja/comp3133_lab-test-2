import { Component, OnInit, signal, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SpacexapiService } from '../network/spacexapi';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './missiondetails.html',
  styleUrl: './missiondetails.css'
})
export class MissiondetailsComponent implements OnInit {
  @Input() flightNumber?: number;
  mission = signal<Mission | null>(null);
  loading = signal(true);
  error = signal('');

  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexapiService
  ) {}

  ngOnInit(): void {
    const id = this.flightNumber ?? Number(this.route.snapshot.paramMap.get('id'));
    this.spacexService.getLaunchById(id).subscribe({
      next: (data) => {
        this.mission.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Could not load mission details.');
        this.loading.set(false);
      }
    });
  }
}
