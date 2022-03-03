import { Component, Input } from '@angular/core';
import { CardInfoModel } from '../../../shared/models/hero/card-info.model';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss'],
})
/** Компонент для отображения историй, событий */
export class HistoryCardComponent {
  @Input() public data: CardInfoModel | null = null;
}
