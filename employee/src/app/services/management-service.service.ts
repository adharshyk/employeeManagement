import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Department } from '../department';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class ManagementServiceService {

  empurl = "http://localhost:8080/api/emp"
  constructor(private httpclient: HttpClient) { }
  getAllEmployee() : Observable<Employee[]>{
      return this.httpclient.get<getEmployeeResponse>(this.empurl).pipe(map(response =>response._embedded.employees))    
  }
  empurl1 = "http://localhost:8080/api/dep"
  getAllDepartment() : Observable<Department[]>{
    return this.httpclient.get<getDepartmentResponse>(this.empurl1).pipe(map(response =>response._embedded.departments))
  }
  
}

interface getEmployeeResponse{
  _embedded : {
    employees : Employee[]
  }
}

interface getDepartmentResponse{
  _embedded : {
    departments :Department[]
  }
}