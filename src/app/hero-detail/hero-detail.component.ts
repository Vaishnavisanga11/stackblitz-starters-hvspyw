import { Component, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  standalone:true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  
export class HeroDetailComponent implements OnInit {
  @Input()

  constructor() { }

  ngOnInit() {
  }

}