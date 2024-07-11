import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    // para obtener el id que viene del URL, debemos inyectar el servicio ActivatedRoute
    private activatedRoute: ActivatedRoute,
    // con este servicio podemos redireccionar al usuario a otra página
    private router: Router
  ) { }

  ngOnInit(): void {

    // aquí tenemos acceso a todos los parametros
    this.activatedRoute.params
      .pipe(
        // aquí desestructuramos los params para sacar el id 
        // hacemos la llamada al service y capturamos lo que devuelve en el subscribe
        switchMap(({ id }) => this.heroesService.getHeroById(id))
      )
      // aca obtenemos el hero
      .subscribe(hero => {

        // preguntamos si tenemos un hero.
        // sino tenemos un hero redireccionamos al usuario a otra pantalla
        if (!hero) return this.router.navigate(['/heroes/list']);
        // .navigateByUrl('heroes/list')

        return this.hero = hero;
      })
  }

  goBack(): void {
    this.router.navigateByUrl('heroes/list')
  }

}
