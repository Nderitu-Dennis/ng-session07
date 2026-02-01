import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

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
      Swal.fire({
        title: 'Updated!',
        icon: 'success',
        text: 'employee updated successfully!',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      // ADD: Push a new item
      this.employees.push({ ...this.employeeObj });
      Swal.fire({
        title: 'Saved!',
        icon: 'success',
        text: 'employee saved successfully!',
                showConfirmButton: false,
                timer: 2000

      });
    }

    this.updateLocalStorage();
    form.resetForm();
  }

  //  updates the local storage string
  private updateLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  deleteEmployee(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees.splice(index, 1);
            this.updateLocalStorage();

        Swal.fire({
          title: 'Deleted!',
          text: 'Employee has been deleted.',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        });
      }
    });

    // update the local storage after removing/deleting frm the array
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
