import { Injectable } from '@angular/core';
import { Observable, of, ObjectUnsubscribedError } from 'rxjs';

import {Hero} from './hero';
import { HEROES } from './mock-heroes';
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
    // add a message to the service
    this.messageService.add('HeroService: feteched heroes');

    // emits a single value, the array of mock heroes
    return of(HEROES); // returns an Observable<Hero[]>

  }

  // get hero based on id
  getHero(id:number): Observable<Hero> {
    this.messageService.add(`HeroService feteched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

