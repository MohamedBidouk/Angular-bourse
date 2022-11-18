import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPerCategoryComponent } from './search-per-category/search-per-category.component';
import { SearchPerFirstnameComponent } from './search-per-firstname/search-per-firstname.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListCategorysComponent } from './list-categorys/list-categorys.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    StudentsComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    SearchPerCategoryComponent,
    SearchPerFirstnameComponent,
    SearchFilterPipe,
    ListCategorysComponent,
    UpdateCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
