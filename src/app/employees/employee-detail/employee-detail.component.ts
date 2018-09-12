import { Component, OnInit } from '@angular/core';
import { employ } from '../../model/employ';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee : employ;

  constructor(private route : ActivatedRoute, private employeeService : EmployeesService, private router : Router) { 

  }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    const id = this.route.snapshot.params['id'];
    this.employee = this.employeeService.getEmployee(+id);
    this.route.params.subscribe(
      (params : Params) => {
        this.employee = this.employeeService.getEmployee(+params['id']);
      }
    );
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
