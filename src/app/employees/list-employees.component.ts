import { Component, OnInit } from '@angular/core';
import {Employee} from '../Model/employee.model'
import {Employeeservice} from './employee.service';
import {Router} from '@angular/router';

@Component({
  //selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

employees: Employee[];


  constructor(private _Employeeservice : Employeeservice , private _route: Router) { }

  ngOnInit() {
    this.employees = this._Employeeservice.getEmployees(); 
  }
  onClick(employeeId : number) : void
  {
      this._route.navigate(['./list',employeeId])
  }

}
