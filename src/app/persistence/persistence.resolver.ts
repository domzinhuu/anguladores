import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngulatorForm } from '../components/angulator-persistence-components/angulator-form/angulator-form';

@Injectable({ providedIn: 'root' })
export class PersistenceResolve implements Resolve<AngulatorForm> {
  resolve(route: ActivatedRouteSnapshot): Observable<AngulatorForm> {
    return;
  }
}
