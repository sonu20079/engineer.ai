import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service';
import {Employee} from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  isDesc: boolean = false;
  column: string = 'joining_date';
  direction: number;
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.employees = this.empService.employeeRecords;
    this.empService.insertEmployees();
  }

  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }
}
