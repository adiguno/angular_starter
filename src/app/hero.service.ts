import { Injectable } from '@angular/core';
import {Hero} from './hero';
import { HEROES} from './mock-heroes';

// marks the class that it participates in 
// the dependency injection system
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  
  // get the mock heroes
  getHeroes(): Hero[] {
    return HEROES;
  }
  
}

