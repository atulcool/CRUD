import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Employeeservice } from './employee.service';
import { Employee } from '../Model/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee : Employee;
  constructor(private _route : ActivatedRoute, private _employeeservice : Employeeservice)
   {
          
    }

  ngOnInit() {
    const id = +this._route.snapshot.params['id'];
    this.employee = this._employeeservice.getEmployee(id);
  }

}
