import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EdirEmployeeComponent } from './employees/edir-employee/edir-employee.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { FormsModule } from '@angular/forms';
import { EmployeesService } from './services/employees.service';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';

const appRoutes : Routes = [
  { path : '', component : HomeComponent},
  { path : 'employees', component : EmployeeComponent, children : [
    {path: ':id', component: EmployeeDetailComponent},
    {path: ':id/edit', component: EdirEmployeeComponent}
  ]},
  { path : "maintenance", component : MaintenanceComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    EdirEmployeeComponent,
    MaintenanceComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
