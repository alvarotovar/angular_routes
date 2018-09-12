import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  employees : {name : string, age : number, charge : string, state: string}[] = [];

  constructor(private employeesService : EmployeesService) { }

  ngOnInit() {
    this.employees = this.employeesService.employees;
  }

  
}
