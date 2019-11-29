import { Component, OnInit } from '@angular/core';

// imoprt the custom Hero class src/app/hero.ts
import {Hero} from '../hero';

import {HEROES} from '../mock-heroes';

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
  heroes = HEROES;

  selectedHero: Hero;
  
  
  
  constructor() { }
  
  ngOnInit() {}

  // onSelect for the click event
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
