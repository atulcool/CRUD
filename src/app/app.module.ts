import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Employeeservice} from '../app/employees/employee.service';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';

const appRoutes : Routes = [
  {path : 'list' , component: ListEmployeesComponent},
  {path : 'edit/:id' , component: CreateEmployeeComponent},
  {path : 'list/:id' , component: EmployeeDetailsComponent},
  {path : '' , redirectTo : '/list' ,pathMatch :'full'}
 ];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [Employeeservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
