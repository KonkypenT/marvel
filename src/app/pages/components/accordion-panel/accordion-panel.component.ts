import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardInfoModel } from '../../../shared/models/hero/card-info.model';

@Component({
  selector: 'app-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss'],
})
/** Компонент для отображения панелью с аккордионом */
export class AccordionPanelComponent {
  @Input() public title: string = '';
  @Input() public data: CardInfoModel[] | null = null;
  @Input() public displayColumnContent: boolean = false;

  @Output() public openPanel: EventEmitter<void> = new EventEmitter<void>();
}
