import { Component } from '@angular/core';
import { Films } from '../../services/films';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  public searchString: string = '';

  constructor(private _filmService: Films) {}

  public updateValue(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchString = inputElement.value;
  }

  public updateSearch(event: Event) {
    this._filmService.SearchString = this.searchString;
  }
}
