import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html'
})
export class CountryInputComponent implements OnInit {

  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  public query: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    
    this.onSearch.emit(this.query);
  }
}
