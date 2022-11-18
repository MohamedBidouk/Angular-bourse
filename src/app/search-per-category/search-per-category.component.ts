import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { Category } from '../model/category.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-search-per-category',
  templateUrl: './search-per-category.component.html',
  styleUrls: ['./search-per-category.component.css']
})
export class SearchPerCategoryComponent implements OnInit {

  
  students! : Student[];
  IdCategory! : number;
  categorys! : Category[];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.listCategorys().
      subscribe(cats => {this.categorys = cats._embedded.categories;
      console.log(cats);
      });
  }

  onChange() {
    this.studentService.searchPerCategory(this.IdCategory).
    subscribe(studs =>{this.students = studs});
    }

}
