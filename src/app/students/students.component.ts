import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students! : Student[];
  constructor(private studentService: StudentService) { 
    //this.students = studentService.listStudents();
  }

  ngOnInit(): void {
   this.loadStudents();
  }

  loadStudents(){
    this.studentService.listStudents().subscribe(studs => {
      console.log(studs);
      this.students = studs;
      });
  }

  deleteStudent(s : Student){
    //console.log(s);
    let conf = confirm("Are you sure ?");
      if (conf)
      this.studentService.deleteStudent(s.id).subscribe(() => {
        console.log("student deleted!");
        this.loadStudents();
        });
  }

}
