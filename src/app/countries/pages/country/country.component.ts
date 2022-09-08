import { Component, OnInit } from '@angular/core';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html'
})
export class CountryComponent implements OnInit {

  public query:string = '';
  public isExists: boolean = true;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search() {

    this.isExists = true;
    this.countryService.searchCountryByName(this.query).subscribe(response =>{
      console.log(response);
    },
    error =>{
      this.isExists = false;
    });
  }
}
