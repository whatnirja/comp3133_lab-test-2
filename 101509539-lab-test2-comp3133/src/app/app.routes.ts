import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist';
import { MissiondetailsComponent } from './missiondetails/missiondetails';
import { MissionfilterComponent } from './missionfilter/missionfilter';

export const routes: Routes = [
  { path: '', redirectTo: 'missions', pathMatch: 'full' },
  { path: 'missions', component: MissionlistComponent },
  { path: 'filter', component: MissionfilterComponent },
  { path: 'missions/:id', component: MissiondetailsComponent },
];
