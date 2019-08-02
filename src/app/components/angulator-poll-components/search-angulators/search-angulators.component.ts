import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-angulators',
  templateUrl: './search-angulators.component.html',
  styleUrls: ['./search-angulators.component.scss']
})
export class SearchAngulatorsComponent implements OnInit {
  @Input() loading: boolean;
  @Output() doSearch = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public searchButtonClick(query: string): void {
    this.doSearch.emit(query);
  }
}
