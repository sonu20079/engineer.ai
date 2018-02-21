import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {SearchNamePipe} from './pipes/search-name.pipe';
import {OrderByDatePipe} from './pipes/orderby-date.pipe';
import {EmployeeService} from './services/employee.service';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchNamePipe,
    OrderByDatePipe,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
