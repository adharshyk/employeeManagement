import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/department';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments : Department[];
  constructor(private service: ManagementServiceService) { }

  ngOnInit(): void {
    this.getAllDepartments();
  }

  getAllDepartments(){
    this.service.getAllDepartment().subscribe(
      data=>{console.log(data);
        this.departments = data ;
      }
    ) ;
  }

}
