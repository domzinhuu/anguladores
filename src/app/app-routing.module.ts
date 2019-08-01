import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './container/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/angulators/poll',
    pathMatch: 'full'
  },
  {
    path: 'angulators',
    component: DashboardComponent,
    children: [
      {
        path: 'poll',
        loadChildren: () => import('./poll/poll.module').then(m => m.PollModule)
      },
      {
        path: 'persistence',
        loadChildren: () => import('./persistence/persistence.module').then(m => m.PersistenceModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
