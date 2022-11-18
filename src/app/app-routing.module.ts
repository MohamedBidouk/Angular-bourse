import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { SearchPerCategoryComponent } from './search-per-category/search-per-category.component';
import { SearchPerFirstnameComponent } from './search-per-firstname/search-per-firstname.component';
import { ListCategorysComponent } from './list-categorys/list-categorys.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

const routes: Routes = [
  {path: "students", component: StudentsComponent},
  {path: "add-student", component: AddStudentComponent},
  {path: "", redirectTo: "students", pathMatch: "full"},
  {path: "updateStudent/:id", component: UpdateStudentComponent},
  {path: "searchPerCategory", component: SearchPerCategoryComponent},
  {path: "searchPerFirstnam", component: SearchPerFirstnameComponent},
  {path: "listCategorys", component: ListCategorysComponent},
  {path: "updateCategory", component: UpdateCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
