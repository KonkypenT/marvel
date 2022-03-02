import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-optional-card',
  templateUrl: './optional-card.component.html',
  styleUrls: ['./optional-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/** Компонент для отображения дополнительных карточек (комиксы, истории и т.д.) */
export class OptionalCardComponent {
  @Input() public;
}
