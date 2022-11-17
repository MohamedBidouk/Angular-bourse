import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path: "students", component: StudentsComponent},
  {path: "add-student", component: AddStudentComponent},
  {path: "", redirectTo: "students", pathMatch: "full"},
  {path: "updateStudent/:id", component: UpdateStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
