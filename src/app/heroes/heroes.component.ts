import { Component, OnInit } from '@angular/core';

// imoprt the custom Hero class src/app/hero.ts
import {Hero} from '../hero';

import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // initialize the Hero object
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // get the heroes array
  heroes: Hero[];

  selectedHero: Hero;
  
  
  // defines a private heroService property
  // and identifies it as a HeroService injection site
  constructor(private heroService: HeroService) { }
  
  ngOnInit() {
    this.getHeroes();
  }

  // onSelect for the click event
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // retrieve heroes from the service
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

}
