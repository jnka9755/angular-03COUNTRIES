import { Component, Input, OnInit } from '@angular/core';
import { CountryDto } from '../../interfaces/countryDto.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html'
})
export class CountryTableComponent implements OnInit {


  @Input() countries: CountryDto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
