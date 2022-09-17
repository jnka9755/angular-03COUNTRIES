import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html'
})
export class CountryInputComponent implements OnInit {

  @Input() placeholder: string = '';

  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); 

  debouncer: Subject<string> = new Subject();

  public query: string = '';

  constructor() { }

  ngOnInit(): void {

    this.debouncer.pipe(debounceTime(300)).subscribe( value => {
      this.onDebounce.emit(value);
    });
  }

  search(){
    
    this.onSearch.emit(this.query);
  }

  changeValue(){

    this.debouncer.next(this.query);
  }
}
