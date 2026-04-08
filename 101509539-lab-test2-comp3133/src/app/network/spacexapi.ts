import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getAllLaunches(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl);
  }

  getLaunchesByYear(year: string): Observable<Mission[]> {
    const params = new HttpParams().set('launch_year', year);
    return this.http.get<Mission[]>(this.baseUrl, { params });
  }

  getLaunchById(flightNumber: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseUrl}/${flightNumber}`);
  }
}
