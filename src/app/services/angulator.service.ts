import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Angulator } from '../models/angulator';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AngulatorService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getAngulators(queryModel: any): Observable<any> {
    const params = this.getHttpParams(queryModel);
    return this.http.get<any>(this.url, { params });
  }

  public saveAngulator(angulator: Angulator): Observable<any> {
    return this.http.post(this.url, angulator);
  }

  public getAngulatorById(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  private getHttpParams(queryModel: any): HttpParams {
    let params = new HttpParams();
    Object.keys(queryModel).forEach(key => {
      params = params.append(key, queryModel[key]);
    });

    return params;
  }
}
