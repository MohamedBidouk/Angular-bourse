import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  newStudent = new Student();
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  addStudent(){
    //console.log(this.newStudent);
    this.studentService.addStudent(this.newStudent);
  }

}
