import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Routes, RouterModule } from '@angular/router';
import { NewemployeeComponent } from './components/newemployee/newemployee.component';
import { NewdepartmentComponent } from './components/newdepartment/newdepartment.component';

const routes :Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    DepartmentsComponent,
    WelcomeComponent,
    NewemployeeComponent,
    NewdepartmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
