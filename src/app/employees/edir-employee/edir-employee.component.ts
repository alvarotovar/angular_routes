import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { employ } from '../../model/employ';

@Component({
  selector: 'app-edir-employee',
  templateUrl: './edir-employee.component.html',
  styleUrls: ['./edir-employee.component.css']
})
export class EdirEmployeeComponent implements OnInit {
  
  employEdit : employ;  
  employee : employ;
  id : number;

  constructor(private route : ActivatedRoute, private employeeService : EmployeesService, private router : Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.id = id;

    this.employee = this.employeeService.getEmployee(id);
    this.employEdit = new employ();
    this.employEdit.age = this.employee.age;
    this.employEdit.charge = this.employee.charge;
    this.employEdit.state = this.employee.state;
    this.employEdit.name = this.employee.name;
  }

  save(){
    this.employeeService.setEmployee(this.id, this.employEdit);
    this.router.navigate(['../'], {relativeTo : this.route});
  }
}
