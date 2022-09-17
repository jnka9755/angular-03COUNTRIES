import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { CountryDto } from '../interfaces/countryDto.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private URL: string = 'https://restcountries.com/v2/'

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) { }

  searchCountryByName(parameter: string): Observable<CountryDto[]> {
    
    const url = `${this.URL}/name/${ parameter}`;
    return this.http.get<CountryDto[]>(url , { params: this.httpParams });
  }

  searchContryByCapital(parameter: string): Observable<CountryDto[]> {
    
    const url = `${this.URL}/capital/${parameter}`;
    return this.http.get<CountryDto[]>(url, { params: this.httpParams });
  }

  searchContryByCode(id: string): Observable<CountryDto> {
    
    const url = `${this.URL}/alpha/${id}`;
    return this.http.get<CountryDto>(url);
  }

  searchCountriesByRegion(region: string): Observable<CountryDto[]> {
    
    const url = `${this.URL}/regionalbloc/${region}`;
    return this.http.get<CountryDto[]>(url, {params: this.httpParams});
  }
}
