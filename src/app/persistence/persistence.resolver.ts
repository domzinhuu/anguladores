import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Angulator } from '../models/angulator';
import { AngulatorService } from '../services/angulator.service';

@Injectable({ providedIn: 'root' })
export class PersistenceResolve implements Resolve<Angulator> {
  constructor(private angulatorService: AngulatorService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Angulator> {
    return;
  }
}
