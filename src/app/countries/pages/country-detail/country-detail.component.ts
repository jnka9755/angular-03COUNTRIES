import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';
import { CountryDto } from '../../interfaces/countryDto.interface';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html'
})
export class CountryDetailComponent implements OnInit {

  country!: CountryDto;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.countryService.searchContryByCode(id)),
      tap( console.log)
    )
    .subscribe(country => {
      this.country = country
    });

    // this.activatedRoute.params.subscribe( ({id}) => {

    //   this.countryService.searchContryByCode(id).subscribe( data => {
    //     console.log(data);
    //   });
    // });
  }
}
