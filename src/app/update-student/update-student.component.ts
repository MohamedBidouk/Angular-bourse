import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  currentStudent = new Student();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private studentService: StudentService) { }

  ngOnInit():  void{
    this.currentStudent = this.studentService.consultStudent(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentStudent);
  }

  updateStudent(){
    this.studentService.updateStudent(this.currentStudent);
    this.router.navigate(['students']);
  }

}
