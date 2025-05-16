import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airline } from './Airline';

@Injectable({
  providedIn: 'root',
})
export class AirlineService {
  private apiUrl = 'https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/main/flights.json';

  constructor(private http: HttpClient) {}

  getAirlines(): Observable<Airline[]> {
    return this.http.get<Airline[]>(this.apiUrl);
  }
}
