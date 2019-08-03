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
  constructor() {}

  ngOnInit() {}
}
