import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersistenceResolve } from './persistence.resolver';
import { PersistenceComponent } from './persistence.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: PersistenceComponent,
    data: { isCreate: true, isView: false, isEdit: false }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersistenceRoutingModule {}
