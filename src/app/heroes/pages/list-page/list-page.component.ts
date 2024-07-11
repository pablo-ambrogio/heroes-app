import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})

// Implementamos OnInit para hacer la petición cuando el componente se monta
// Implementamos OnDestroy para desmontar el componente
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = [];

  //Inyectar el service para ser utilizado
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.heroesService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes
      });

  }


}
