import { Component, OnInit } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { CountryDto } from '../../interfaces/countryDto.interface';
import { RegionDto } from '../../interfaces/regionDto.interface';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [`
  button {
      margin-right: 5px
    }
    `]
})
export class RegionComponent implements OnInit {

  public regions: RegionDto[] = [
    {code: 'EU', name: 'Unión Europea'},
    {code: 'EFTA', name: 'Asociacion Europea de comercio libre'},
    {code: 'CARICOM', name: 'Comunidad del Caribe'},
    {code: 'PA', name: 'Alianza del Pacífico'},
    {code: 'AU', name: 'Unión Africana'},
    {code: 'USAN', name: 'Unión de Naciones Suramericanas'},
    {code: 'EEU', name: 'Unión Económica Euroasiática'},
    {code: 'AL', name: 'Liga Árabe'},
    {code: 'ASEAN ', name: 'Asociación de Naciones del Sudeste Asiático'},
    {code: 'CAIS', name:'Sistema de la Integración Centroamericana'},
    {code: 'CEFTA', name: 'Tratado de Libre Comercio de Europa Central'},
    {code: 'NAFTA', name: 'Tratado de Libre Comercio Norteamericano'},
    {code: 'SAARC', name: 'Asociación del Sur de Asia para la Cooperación Regional'}
  ];  
  public regionActiveName: string = '';
  public countries: CountryDto[] = [];

  private regionActiveCode: string = '';

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  activeRegion(region: RegionDto) {

    if(region.code === this.regionActiveCode) return;
    this.countries = [];
    this.regionActiveCode = region.code;
    this.regionActiveName = region.name;
    this.countryService.searchCountriesByRegion(region.code).subscribe( countries => {
      this.countries = countries;
    });
  }

  getCSSButton(region: RegionDto) {

    return (region.code === this.regionActiveCode) ? 'btn btn-primary' :'btn btn-outline-primary'
  }
}
