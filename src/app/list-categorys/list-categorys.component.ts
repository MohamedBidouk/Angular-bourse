import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-categorys',
  templateUrl: './list-categorys.component.html',
  styleUrls: ['./list-categorys.component.css']
})
export class ListCategorysComponent implements OnInit {

  categories! : Category[];
  updatedCat:Category = {"idCat":0,"nameCat":"", descriptionCat:"last year"};
  ajout:boolean=true;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.listCategorys().
      subscribe(cats => {this.categories = cats._embedded.categories;
      console.log(cats)});
  }

  categoryUpdated(cat:Category){
    console.log("Cat updated event",cat);
    this.studentService.addCategory(cat).
     subscribe( ()=> this.loadCategorys());
    }

    loadCategorys(){
      this.studentService.listCategorys().
      subscribe(cats => {this.categories = cats._embedded.categories;
      console.log(cats);
      });
      }

      updateCat(cat:Category) {
        this.updatedCat=cat;
        this.ajout=false; 
        }

}
