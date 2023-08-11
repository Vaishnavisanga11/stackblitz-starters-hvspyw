import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [HeroesComponent],
  
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'windstorm',
  };

  constructor() {}

  ngOnInit() {}
}
