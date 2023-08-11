import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormModule } from '@angular/forms';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [CommonModule, FormModule],
})
export class HeroesComponent implements OnInit {
  @input() hero!: Hero;

  constructor() {}

  ngOnInit() {}
}
