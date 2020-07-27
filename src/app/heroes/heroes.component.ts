import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 12,
    name: 'Arrow',
  };

  constructor() {}

  ngOnInit(): void {}
}
