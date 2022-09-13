import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CountryDto } from '../interfaces/countryDto.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private URL: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCountryByName(parameter: string): Observable<CountryDto[]> {
    
    return this.http.get<CountryDto[]>(`${this.URL}/name/${ parameter }`);
  }
}
