import { Injectable } from '@angular/core';
import {Hero} from './hero';
import { HEROES } from './mock-heroes';

import { Observable, of } from 'rxjs';


// marks the class that it participates in 
// the dependency injection system
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  
  // get the mock heroes
  getHeroes(): Observable<Hero[]> {
    return of(HEROES); // returns an Observable<Hero[]>
    // emits a single value, the array of mock heroes
  }

}

