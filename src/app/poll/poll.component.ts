import { Component, OnInit } from '@angular/core';
import { AngulatorService } from '../services/angulator.service';
import { Observable } from 'rxjs';
import { Angulator } from '../models/angulator';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {
  public queryName: string;
  public page: number;
  public size: number;
  public totalRegister: number;
  public isLoading: boolean;
  public $angulators: Observable<Angulator[]>;

  constructor(private angulatorService: AngulatorService, private router: Router) {}

  ngOnInit() {
    this.page = 1;
    this.size = 3;
    this.totalRegister = 0;
    this.search();
  }

  public search(query?: string): void {
    if (query) {
      this.page = 1;
    }
    this.queryName = query;
    this.$angulators = this.angulatorService.getAngulators(this.mountQueryModel()).pipe(
      tap(res => (this.totalRegister = res.totalRegisters)),
      map(res => res.data)
    );
  }

  public view(id: number): void {
    this.router.navigate(['/angulators/persistence/review', id]);
  }

  public pageChange(page: number): void {
    this.page = page;
    this.search();
  }

  private mountQueryModel(): any {
    const model = { page: this.page, size: this.size };

    if (this.queryName) {
      model['name'] = this.queryName;
    }
    return model;
  }
}
