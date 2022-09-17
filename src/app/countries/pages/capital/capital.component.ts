import { Component, OnInit } from '@angular/core';

import { CountryDto } from '../../interfaces/countryDto.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html'
})
export class CapitalComponent implements OnInit {

  public query:string = '';
  public searchByCapital: string = 'Buscar por capital...';
  public isExists: boolean = true;
  public countries: CountryDto[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search( query: string) {
    
    this.isExists = true;
    this.query = query;
    
    this.countryService.searchContryByCapital(query).subscribe(response =>{

      this.countries = response;
      this.countries[0]
    },
    error =>{
      this.isExists = false;
      this.countries = [];
    });
  }

  suggest(query: string){

    this.isExists = true;
  }
  
}
