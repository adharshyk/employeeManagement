import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/department';
import { Employee } from 'src/app/employee';
import { ManagementServiceService } from 'src/app/services/management-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees: Employee[];


  constructor(private service: ManagementServiceService,private route: Router) { }

  ngOnInit(): void {
    this.listOfEmployees();

  }

  listOfEmployees() {
    this.service.getAllEmployee().subscribe(data => {
      console.log(data);
      this.employees = data;
    });
  }
  newEmployee(){
    this.route.navigateByUrl("/newEmployee")
  }
}
