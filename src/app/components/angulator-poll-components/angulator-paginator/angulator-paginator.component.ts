import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-angulator-paginator',
  templateUrl: './angulator-paginator.component.html',
  styleUrls: ['./angulator-paginator.component.scss']
})
export class AngulatorPaginatorComponent implements OnInit {
  @Input() totalOfRecords: number;
  @Input() page: number;
  @Input() size: number;

  pages: number[] = [];

  constructor() {}

  ngOnInit() {
    const totalPage = Math.ceil(this.totalOfRecords / this.size);
    console.log(totalPage, this.size, this.totalOfRecords);
    for (let index = 1; index <= totalPage; index++) {
      this.pages.push(index);
    }

    console.log(this.pages);
  }
}
