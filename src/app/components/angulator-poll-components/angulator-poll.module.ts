import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchAngulatorsComponent } from './search-angulators/search-angulators.component';
import { AngulatorsListComponent } from './angulators-list/angulators-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FormsModule, NgxPaginationModule, FontAwesomeModule],
  exports: [SearchAngulatorsComponent, AngulatorsListComponent, NgxPaginationModule],
  declarations: [SearchAngulatorsComponent, AngulatorsListComponent],
  providers: []
})
export class AngulatorPollModule {}
