import { Injectable } from '@angular/core';
import { Observable, of, ObjectUnsubscribedError } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

// HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
// error handling
import { catchError, map, tap } from 'rxjs/operators';


// marks the class that it participates in 
// the dependency injection system
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // URL to web api
  private heroesUrl = 'api/heroes';

  // Angular injects the singleton MessageSerivice into a property
  // service-in-service
  // injecting a service into another service
  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }
  
  // get the mock heroes
  getHeroes(): Observable<Hero[]> {
    // add a message to the service
    // this.messageService.add('HeroService: feteched heroes');

    // emits a single value, the array of mock heroes
    // return of(HEROES); // returns an Observable<Hero[]>

    // use the mock server's data, via URL
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  // get hero based on id
  getHero(id:number): Observable<Hero> {
    this.messageService.add(`HeroService feteched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  // wrapper for messageService
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  // handling errors
  // generalized to handle many 'HeroService' methods
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

