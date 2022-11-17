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
    this.studentService.listCategorys()
    .subscribe(cats => {
      this.categorys = cats._embedded.categories;
      console.log(cats);
    });
  }

  addStudent(){
    this.newStudent.category = this.categorys.find(cat => cat.idCat == this.newIdCat)!;
    this.studentService.addStudent(this.newStudent)
                        .subscribe(stud => {
                        console.log(stud);
                        this.router.navigate(['students']);
                        });
  }

}
