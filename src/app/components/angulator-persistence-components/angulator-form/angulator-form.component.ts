import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-angulator-form',
  templateUrl: './angulator-form.component.html',
  styleUrls: ['./angulator-form.component.scss']
})
export class AngulatorFormComponent implements OnInit {
  @Output() cancelAction = new EventEmitter();

  isViewing = false;
  isEditing = false;
  isCreating = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.isViewing = this.activatedRoute.snapshot.data.isView;
    this.isEditing = this.activatedRoute.snapshot.data.isEdit;
    this.isCreating = this.activatedRoute.snapshot.data.isCreate;
  }

  goBack(): void {
    this.cancelAction.emit();
  }
}
