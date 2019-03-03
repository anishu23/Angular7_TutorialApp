// Step 1: Create a Service
// Step 2: Register the service in the proper module
// Step 3: Define as a Dependable

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees() {
    return [
      {"id":1, "name":"Spiderman", "age":22 },
      {"id":1, "name":"Batman", "age":29 },
      {"id":1, "name":"Superman", "age":28 },
      {"id":1, "name":"Ironman", "age":30 }
    ];
  }

  getEmployeesFromHttp(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
