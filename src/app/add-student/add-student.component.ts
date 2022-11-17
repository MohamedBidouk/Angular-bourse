import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../student.service';
import { Category } from '../model/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  newStudent = new Student();
  categorys! : Category[];

  newIdCat! : number;
  newCategory! : Category;
  constructor(private studentService: StudentService,
              private router: Router) { }

  ngOnInit(): void {
    this.categorys = this.studentService.listCategorys();
  }

  addStudent(){
    this.newCategory = this.studentService.consultCategory(this.newIdCat);
    this.newStudent.category = this.newCategory;
    //console.log(this.newStudent);
    this.studentService.addStudent(this.newStudent);
    this.router.navigate(['students']);
  }

}
