import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { CardComponent } from './components/card/card.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';


@NgModule({
  declarations: [
    CardComponent,
    CardComponent,
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,

    // Pipes
    HeroImagePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ],
  exports: [
    HeroPageComponent
  ]
})
export class HeroesModule { }
