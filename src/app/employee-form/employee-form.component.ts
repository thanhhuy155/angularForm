import { Component, OnInit } from '@angular/core';
import { Empoylee } from '../empoylee';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  jobCategories = ['technology', 'Math', 'Doctor'];
  newEmployee = new Empoylee(1, 'huy', new Date('October 25, 1995 00:00:00'), this.jobCategories[0]);
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  addNewEmployee() {
    this.newEmployee = new Empoylee(Math.floor(Date.now()), '', new Date(), '', '');
  }

  constructor() { }

  ngOnInit() {
  }

}
