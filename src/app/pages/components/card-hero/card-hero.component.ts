import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroModel } from '../../../shared/models/hero/hero.model';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.scss'],
})
/** Компонент для отображения карточки с героем */
export class CardHeroComponent {
  @Input() public hero: HeroModel | null = null;
  @Input() public descriptionIsVisible: boolean = true;
  @Input() public titleIsVisible: boolean = true;

  @Output() public chooseHero: EventEmitter<HeroModel> = new EventEmitter<HeroModel>();
}
