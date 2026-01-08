import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  employees:EmployeeType[]=[];
  employeeObj:EmployeeType={
    name:'',
    email:'',
    phone:''
  };

  //initializing-load data and populate memory on component start up
  ngOnInit(): void {
    const empData = localStorage.getItem("employees");
    if(empData){
      this.employees = JSON.parse(empData);
    }
  }
  
  save(){
   
     this.employees.push({...this.employeeObj}); //... spread operator, creates a shallow copy of the obj
     localStorage.setItem("employees",JSON.stringify(this.employees));
     alert("Employee details saved successfully!");
     // clear the fields
     this.employeeObj.name='';
     this.employeeObj.email='';
     this.employeeObj.phone='';
  }

     deleteEmployee(){    
      console.log('del clicked!')      
   }
}

interface EmployeeType {
  name: string;
  email: string;
  phone: string;
}

// name:string ='john';
  // email:string='';
  // phone:string='';
  // updateName(name: string): void {
  //   alert("name changed to "+name);
  //   this.name = name;
  // }