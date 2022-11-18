import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  @Input()
  category! : Category;

  @Output()
  categoryUpdated = new EventEmitter<Category>();

  @Input()
  ajout!:boolean;

  constructor() { }

  ngOnInit(): void {
    console.log("this is the category to transmit",this.category)
  }

  saveCategory(){
    this.categoryUpdated.emit(this.category);
    }
}
