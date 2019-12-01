import { Injectable } from '@angular/core';
import {Hero} from './hero';
import { HEROES } from './mock-heroes';

import { Observable, of } from 'rxjs';

import {MessageService} from './message.service';


// marks the class that it participates in 
// the dependency injection system
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // Angular injects the singleton MessageSerivice into a property
  // service-in-service
  // injecting a service into another service
  constructor(private messageService: MessageService) { }
  
  // get the mock heroes
  getHeroes(): Observable<Hero[]> {
    // sends a message
    this.messageService.add('HeroService: feteched heroes');

    // emits a single value, the array of mock heroes
    return of(HEROES); // returns an Observable<Hero[]>

  }

}

