import { Component, OnInit } from '@angular/core';

import { CountryDto } from '../../interfaces/countryDto.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [`
    li{
      cursor: pointer
    }
  `]
})
export class CountryComponent implements OnInit {

  public query:string = '';
  public searchByCountry: string = 'Buscar por país...'
  public isExists: boolean = true;
  public countries: CountryDto[] = [];
  public suggestCountries: CountryDto[] = [];
  public viewSuggest: boolean = false;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search( query: string) {

    this.viewSuggest = false;
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

  suggest(query: string){

    this.viewSuggest = true;
    this.isExists = true;
    this.query = query;
    this.countryService.searchCountryByName(query)
      .subscribe( countries =>  this.suggestCountries = countries.splice(0,5),
      (error) => this.suggestCountries = []
      );
  }
}
