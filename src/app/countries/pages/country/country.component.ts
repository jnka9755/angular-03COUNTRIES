import { Component, OnInit } from '@angular/core';
import { CountryDto } from '../../interfaces/countryDto.interface';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html'
})
export class CountryComponent implements OnInit {

  public query:string = '';
  public isExists: boolean = true;
  public countries: CountryDto[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search( query: string) {

    this.isExists = true;
    this.query = query;
    
    this.countryService.searchCountryByName(query).subscribe(response =>{

      this.countries = response;
      this.countries[0]
    },
    error =>{
      this.isExists = false;
      this.countries = [];
    });
  }
}
