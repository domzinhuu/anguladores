import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Angulator } from 'src/app/models/angulator';

@Component({
  selector: 'app-angulator-form',
  templateUrl: './angulator-form.component.html',
  styleUrls: ['./angulator-form.component.scss']
})
export class AngulatorFormComponent implements OnInit {
  @Input() loading: boolean;
  @Output() cancelAction = new EventEmitter();
  @Output() submitAction = new EventEmitter();

  isViewing = false;
  isEditing = false;
  isCreating = false;

  selectedImage: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.isViewing = this.activatedRoute.snapshot.data.isView;
    this.isEditing = this.activatedRoute.snapshot.data.isEdit;
    this.isCreating = this.activatedRoute.snapshot.data.isCreate;
  }

  public goBack(): void {
    this.cancelAction.emit();
  }

  public sendData(ngForm: NgForm): void {
    if (ngForm.invalid) {
      return;
    }

    const angulatorData: Angulator = ngForm.value;

    if (this.selectedImage) {
      angulatorData.thumbs = this.selectedImage;
    }

    this.submitAction.emit(angulatorData);
  }

  public changePicture(files: any): void {
    const reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.onload = event => {
      this.selectedImage = reader.result;
    };
  }
}
