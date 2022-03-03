import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HeroInfoComponent } from './hero-info.component';
import { HeroesModule } from '../heroes/heroes.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [HeroInfoComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressBarModule,
    HeroesModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
})
export class HeroInfoModule {}
