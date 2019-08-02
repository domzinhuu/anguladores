import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Angulator } from 'src/app/models/angulator';

@Component({
  selector: 'app-angulators-list',
  templateUrl: './angulators-list.component.html',
  styleUrls: ['./angulators-list.component.scss']
})
export class AngulatorsListComponent implements OnInit {
  @Input() data: Angulator[];
  @Input() pagination: boolean;
  @Input() page = 1;
  @Input() size = 3;
  @Input() totalRegister: number;

  @Output() paginationEvent = new EventEmitter();
  @Output() cardClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public pageClick(event: any): void {
    this.paginationEvent.emit(event);
  }

  public clickOnCard(id: number): void {
    this.cardClick.emit(id);
  }

  public sliceText(text: string): string {
    if (text.length > 80) {
      return text.slice(0, 80) + '...';
    }
    return text;
  }
}
