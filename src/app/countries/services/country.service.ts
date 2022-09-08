import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private URL: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCountryByName(parameter: string): Observable<any> {
    
    return this.http.get(`${this.URL}/name/${parameter}`);
  }
}
