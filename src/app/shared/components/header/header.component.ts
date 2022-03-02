import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/** Компонент для отображения хедера на страницах */
export class HeaderComponent {
  @Input() public buttonBackIsVisible: boolean = false;
  @Input() public title: string = 'Heroes';

  @Output() public back: EventEmitter<void> = new EventEmitter<void>();
}
