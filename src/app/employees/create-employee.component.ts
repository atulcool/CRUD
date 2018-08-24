import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Department} from '../Model/department.model';
import {Employee} from '../Model/employee.model';
import {Employeeservice} from './employee.service';
import {Router, ActivatedRoute} from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  radio = 'Email';
  radios  = 'Male';
  isChecked = true;
  public panelTittle : string;
  employees : Employee ;
  departments : Department[] = [
    {id:1,name : 'Admin'},{id : 2,name:"HR"},{id:3,name:"Help Desk"},{id : 4,name :"IT"},{id : 5,name :"N/A"}
  ]
  previewPhoto : boolean = true;

  constructor( private _employeservice : Employeeservice , private _router : Router,private _activeroute :ActivatedRoute ) { }

  togglePreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
    this._activeroute.paramMap.subscribe(p=> {const id = +p.get('id');
    this.getEmployee(id);});
  }

  private getEmployee(id : number)
  {
    if(id===0)
    {
      this.employees = {
        id : 5,
        name : null,
        gender : null,
        email : null,
        PhoneNumber : null,
        ContactPreference :null,
        DateOfBirth : null,
        Department : null,
        isActive : null,
        photoPath : null,
        offcAddr :'9th Floor, Sai Radhe Complex, RBM Road, Sangamvadi, Pune, Maharashtra 411001'

      };
    this.panelTittle ='Create Employee';
    }

    else
    {
     this.employees = this._employeservice.getEmployee(id);
     this.panelTittle ='Update Employee';
    }

  }
 
  saveEmployee1() : void
  {
    this._employeservice.save(this.employees);
    this._router.navigate(['list']);
  }
  
  formdata(employeeForm :NgForm) : void
  {
    
  }

}
