import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persistence',
  templateUrl: './persistence.component.html',
  styleUrls: ['./persistence.component.scss']
})
export class PersistenceComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goBack(): void {
    this.router.navigateByUrl('angulators/poll');
  }
}
