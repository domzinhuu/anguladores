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
  },
  {
    path: 'edit',
    component: PersistenceComponent,
    data: { isCreate: false, isView: false, isEdit: true },
    resolve: {
      angulator: PersistenceResolve
    }
  },
  {
    path: 'view',
    component: PersistenceComponent,
    data: { isCreate: false, isView: true, isEdit: false },
    resolve: {
      angulator: PersistenceResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersistenceRoutingModule {}
