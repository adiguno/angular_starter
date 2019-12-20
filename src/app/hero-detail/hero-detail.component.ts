import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
// now
// get the route that created it
// extract 'id' from the route
// acquire the hero with that id from the server, via 'HeroService' 

// was
// This component simply receives a hero object though its 'hero' property
// and displays it.
//
// now is a child of 'HeroesComponent', which sends a hero to display


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  // injecting services
  constructor(
    // info about the route to this instance
    private route: ActivatedRoute, 
    // retrieves hero data from server
    private heroService: HeroService,
    // Angular service for interacting with the browser
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  // goes back one step in browser's history stack
  goBack(): void {
    this.location.back();
  }
}
