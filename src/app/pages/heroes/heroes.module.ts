import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CardHeroComponent } from '../components/card-hero/card-hero.component';

@NgModule({
  declarations: [HeroesComponent, CardHeroComponent],
  imports: [CommonModule, SharedModule, MatButtonModule, MatProgressBarModule],
  providers: [],
})
export class HeroesModule {}
