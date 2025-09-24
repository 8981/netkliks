import { Injectable } from '@angular/core';
import { FILMS } from '../constants/films.constants';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class Films {
  
  private _films: Film[] = FILMS
  private _searchString: string = ''

  constructor() {}

  public get FullFilms(): Film[] {
    return this._films;
  }

  public get FilteredFilms(): Film[] {
    return this._films.filter((item) =>item.title.toLowerCase().includes(this.SearchString.toLowerCase()) ||
        item.original.toLowerCase().includes(this.SearchString.toLowerCase())
    )
  }

  public get SearchString(): string {
    return this._searchString;
  }

  public set SearchString(value: string){
    this._searchString = value;
  }
}
