import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


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
  
  save(form:NgForm){
     if (form.invalid) {
    return;
  }   
     this.employees.push({...this.employeeObj}); //... spread operator, creates a shallow copy of the obj
     localStorage.setItem("employees",JSON.stringify(this.employees));
     alert("Employee details saved successfully!");
     // clear the fields     
  form.resetForm();  
  }

  // HELPER: Just updates the local storage string
  private updateLocalStorage() {
    localStorage.setItem("employees", JSON.stringify(this.employees));
  }

deleteEmployee(index: number){    
if (confirm("Delete this record ?")) {
    this.employees.splice(index, 1);
    // update the local storage after removing/deleting frm the array
    this.updateLocalStorage();
 }   }

     updateEmployee(){    
      console.log('update clicked!')      
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