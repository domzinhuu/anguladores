import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngulatorFormComponent } from './angulator-form/angulator-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AngulatorFormComponent],
  exports: [AngulatorFormComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule]
})
export class AngulatorPersistenceModule {}
