import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InfoCardComponent } from '../components/card-hero/info-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroesComponent, InfoCardComponent],
  imports: [CommonModule, SharedModule, MatButtonModule, MatProgressBarModule, RouterModule],
  providers: [],
  exports: [InfoCardComponent],
})
export class HeroesModule {}
