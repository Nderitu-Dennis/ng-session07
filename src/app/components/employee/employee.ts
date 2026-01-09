import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  employees: EmployeeType[] = [];
  employeeObj: EmployeeType = {
    name: '',
    email: '',
    phone: '',
  };

  // track which record to edit, if null means adding a new employee, otherwiaw edit
  editIndex: number | null = null;

  //initializing-load data and populate memory on component start up
  ngOnInit(): void {
    const empData = localStorage.getItem('employees');
    if (empData) {
      this.employees = JSON.parse(empData);
    }
  }

  // 1. Load data into the form
  onEdit(item: EmployeeType, index: number) {
    this.editIndex = index;
    //  use the spread operator {...} so that changes in the form 
    // don't immediately change the table until we hit 'Update'
    this.employeeObj = { ...item };
  }

  //refactored save method to handle both new saves and edits

 save(form: NgForm) {
    if (form.invalid) return;

    if (this.editIndex !== null) {
      // UPDATE: Replace the item at the specific index
      this.employees[this.editIndex] = { ...this.employeeObj };
      this.editIndex = null; // Reset back to add mode
      alert('Employee updated successfully!');
    } else {
      // ADD: Push a new item
      this.employees.push({ ...this.employeeObj });
      alert('Employee saved successfully!');
    }

    this.updateLocalStorage();
    form.resetForm();
  }

  //  updates the local storage string
  private updateLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  deleteEmployee(index: number) {
    if (confirm('Delete this record?')) {
      this.employees.splice(index, 1);
      // update the local storage after removing/deleting frm the array
      this.updateLocalStorage();
    }
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
