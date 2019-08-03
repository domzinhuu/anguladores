import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngulatorService } from '../services/angulator.service';
import { Angulator } from '../models/angulator';

@Component({
  selector: 'app-persistence',
  templateUrl: './persistence.component.html',
  styleUrls: ['./persistence.component.scss']
})
export class PersistenceComponent implements OnInit {
  errorMessage: string;
  isLoading: boolean;
  angulatorSelected: Angulator;
  constructor(private router: Router, private angulatorService: AngulatorService, private activatedRouter: ActivatedRoute) {}

  ngOnInit() {
    this.angulatorSelected = this.activatedRouter.snapshot.data['angulator'];
  }

  goBack(): void {
    this.router.navigateByUrl('angulators/poll');
  }

  public callAngulators(angulatorData: any): void {
    this.isLoading = true;

    this.angulatorService.saveAngulator(angulatorData).subscribe(
      res => {
        this.isLoading = false;
        this.goBack();
      },
      err => {
        this.isLoading = false;
        this.errorMessage = err.error.message;
      }
    );
  }
}
