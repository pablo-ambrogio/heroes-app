import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

// Implementamos OnInit para verificar asegurarnos que "hero" exista
export class CardComponent implements OnInit {


  @Input()
  public hero!: Hero;

  ngOnInit(): void {
    if (!this.hero) {
      throw new Error('Hero property is required');
    }
  }

}
