import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../model/student.model';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  currentStudent = new Student();
  categorys! : Category[];
  updatedCatId! : number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private studentService: StudentService) { }

  ngOnInit():  void{
    this.categorys = this.studentService.listCategorys();
    this.currentStudent = this.studentService.consultStudent(this.activatedRoute.snapshot.params['id']);
    this.updatedCatId = this.currentStudent.category.idCat;
  }

  updateStudent(){
    this.currentStudent.category = this.studentService.consultCategory(this.updatedCatId);
    this.studentService.updateStudent(this.currentStudent);
    this.router.navigate(['students']);
  }

}
