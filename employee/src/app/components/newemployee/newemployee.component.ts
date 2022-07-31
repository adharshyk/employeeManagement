import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/department';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  departments: Department[]
  constructor(private service:ManagementServiceService) { }

  ngOnInit(): void {
  }

  getAllDepartments(){
    this.service.getAllDepartment().subscribe(
      data=>{console.log(data)
      this.departments = data
    }
    )
  }
}
