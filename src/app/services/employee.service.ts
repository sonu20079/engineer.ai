import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Employee} from '../Employee/employee';

@Injectable()
export class EmployeeService {
  employeeRecords: Employee[] = [{
        'name': 'Jon',
        'joining_date': '23/10/2015',
        'age': 23
        },
        {
        'name': 'Viki',
        'joining_date': '24/01/2015',
        'age': 20
        },
        {
        'name': 'Abc',
        'joining_date': '25/10/2015',
        'age': 43
        },
        {
        'name': 'XYZ',
        'joining_date': '28/10/2015',
        'age': 21
    }];

// using observables
    /*
    insertEmployees() {
      const obs1$ = Observable.from(this.employeeRecords);
      const obs2$ = Observable.interval(4000);
      const obs3$ = obs2$.zip(obs1$);
      obs3$.subscribe(element => {
          const emp = element[1];
          const age = this.reverse(emp.age);
          const joiningDate = this.addDays(emp.joining_date);
          const obj = new Employee(emp.name, age, joiningDate);
          this.employeeRecords.push(obj);
     });
    } */

    // using setTimeout and forrach
    insertEmployees() {
       this.employeeRecords.forEach((emp, index) => {
        setTimeout(() => {
            const age = this.reverse(emp.age);
            const joiningDate = this.addDays(emp.joining_date);
            const obj = new Employee(emp.name, age, joiningDate);
            this.employeeRecords.push(obj);
        }, (index + 1) * 1000 * 60);
       });
      }


    reverse(x) {
       const y = x.toString();
       return y.split('').reverse().join('');
    }

    addDays(dt) {
       const ds = dt.split('/');
       const startDate = new Date(ds[2], ds[1] - 1, ds[0]);
       const daysAhead = 1;
       startDate.setTime(startDate.getTime() + (daysAhead * 24 * 60 * 60 * 1000));
       let date: any = startDate.getDate();
       if (date < 10) {
        date = '0' + date;
       }
       let month: any = startDate.getMonth() + 1;
       if (month < 10) {
        month = '0' + month;
       }
       const year = startDate.getFullYear();
       const  futureDate = date + '/' + month + '/' + year;
       return futureDate;
    }

}
