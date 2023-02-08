import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleToolService {
  URI = 'http://localhost:3000/example_tool/'
  constructor(private http: HttpClient) { }

  getTableData(initDate: any, endDate: any): Observable<HttpResponse<any>>{
    return this.http.get<any>(`${this.URI}table-data?startDate=${initDate}&endDate=${endDate}`);
  }

  getGraphData(initDate: any, endDate: any): Observable<HttpResponse<any>>{
    return this.http.get<any>(`${this.URI}graph-data?startDate=${initDate}&endDate=${endDate}`);
  }

}
