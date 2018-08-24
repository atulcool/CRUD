import {Injectable} from '@angular/core';
import { Employee } from '../Model/employee.model';

@Injectable()

export class Employeeservice
{
    private listEmployees : Employee[] = [
    
        { 
            id : 1,
            name : 'John',
            gender : 'male',
            email : 'John@evolent.com',
            PhoneNumber : 8887776661,
            ContactPreference : 'email',
            DateOfBirth : new Date('10/10/1990'),
            Department : '1',
            isActive : true,
            photoPath : 'assets/Images/john.png',
            offcAddr :'Evolent Pune, Maharashtra 411001'
        
        },
        
        {
        id : 2,
            name : 'Priya',
            gender : 'Female',
            email : 'Priya@evolent.com',
            PhoneNumber : 8887776662,
            ContactPreference : 'email',
            DateOfBirth : new Date('11/11/1990'),
            Department : '2',
            isActive : true,
            photoPath : 'assets/Images/Priya.png',
            offcAddr :'Evolent Pune, Maharashtra 411001'
        
        },
        
        {
        id : 3,
            name : 'Rahul',
            gender : 'male',
            email : 'Rahul@evolent.com',
            PhoneNumber : 8887776663,
            ContactPreference : 'Phone',
            DateOfBirth : new Date('12/12/1990'),
            Department : '3',
            isActive : false,
            photoPath : 'assets/Images/Rahul.png',
            offcAddr :'Evolent Pune, Maharashtra 411001'
        
        },
        
        {
        id : 4,
            name : 'Sheetal',
            gender : 'female',
            email : 'Sheetal@evolent.com',
            PhoneNumber : 8887776663,
            ContactPreference : 'Phone',
            DateOfBirth : new Date('11/12/1991'),
            Department : '4',
            isActive : true,
            photoPath : 'assets/Images/Sheetal.png',
            offcAddr :'Evolent Pune, Maharashtra 411001'
        
        }      
    ];

    getEmployees() : Employee[]
    {
        return this.listEmployees;
    }

    getEmployee(employeeId :number) : Employee
    {
        return this.listEmployees.find(e=>e.id===employeeId);
    }

    
  save(employee : Employee)
  {
    this.listEmployees.push(employee);
  }

  deleteEmp(id : number)
  {
      const i = this.listEmployees.findIndex(c=>c.id===id);
      if(i!==(-1))
      {
        this.listEmployees.splice(i,1);
      }
  }
}


