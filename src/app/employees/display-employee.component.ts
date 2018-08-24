import { Component, OnInit , Input} from '@angular/core';
import { Employee } from '../Model/employee.model';
import {Router, ActivatedRoute} from '@angular/router'
import { Employeeservice } from './employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee : Employee;

  constructor(private _route : ActivatedRoute, private _router : Router, private _empservice : Employeeservice) { }

  ngOnInit() {
  }

  viewEmployee()
  {
    this._router.navigate(['/list',this.employee.id])
  }

  editEmployee()
  {
    this._router.navigate(['/edit',this.employee.id])
  }

  deleteEmployee()
  {
    this._empservice.deleteEmp(this.employee.id);
  }

}
