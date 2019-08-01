import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersistenceRoutingModule } from './persistence-routing.module';
import { PersistenceComponent } from './persistence.component';
import { AngulatorPersistenceModule } from '../components/angulator-persistence-components/angulator-persistence.module';

@NgModule({
  declarations: [PersistenceComponent],
  imports: [
    CommonModule,
    PersistenceRoutingModule,
    AngulatorPersistenceModule
  ]
})
export class PersistenceModule { }
