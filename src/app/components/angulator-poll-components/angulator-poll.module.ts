import { NgModule } from '@angular/core';
import { AngulatorPaginatorComponent } from './angulator-paginator/angulator-paginator.component';
import { SearchAngulatorsComponent } from './search-angulators/search-angulators.component';
import { AngulatorsListComponent } from './angulators-list/angulators-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [AngulatorPaginatorComponent, SearchAngulatorsComponent, AngulatorsListComponent],
  declarations: [AngulatorPaginatorComponent, SearchAngulatorsComponent, AngulatorsListComponent],
  providers: []
})
export class AngulatorPollModule {}
