import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardInfoModel } from '../../../shared/models/hero/card-info.model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
/** Компонент для отображения карточки с информацией о герое, комиксе, сериале */
export class InfoCardComponent {
  @Input() public data: CardInfoModel | null = null;
  @Input() public descriptionIsVisible: boolean = true;
  @Input() public titleIsVisible: boolean = true;

  @Output() public chooseHero: EventEmitter<CardInfoModel> = new EventEmitter<CardInfoModel>();
}
