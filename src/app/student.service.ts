import { Injectable } from '@angular/core';
import { Student } from './model/student.model';
import { Category } from './model/category.model';

@Injectable({
providedIn: 'root'
})
export class StudentService {
  students : Student[]; //un tableau de Produit
  student! : Student;
  categorys : Category[];
  constructor() {
    this.categorys = [
      {idCat: 1, nameCat: "new candidate", descriptionCat:"2020"},
      {idCat: 2, nameCat: "old candidate", descriptionCat:"2019"},
      {idCat: 2, nameCat: "mid candidate", descriptionCat:"2019"}
    ];
  this.students = [
    {id : 1, CIN : 365528, firstname : "Mohamed", lastname: "Bidouk", bacgeneration : 2020, category: {idCat: 1, nameCat: "new candidate", descriptionCat:"2020"}},
    {id : 2, CIN : 365528, firstname : "Mohamed", lastname: "Bidouk", bacgeneration : 2020, category: {idCat: 1, nameCat: "old candidate", descriptionCat:"2020"}},
    {id : 3, CIN : 365528, firstname : "Mohamed", lastname: "Bidouk", bacgeneration : 2020, category: {idCat: 1, nameCat: "mid candidate", descriptionCat:"2020"}}
  ];
  }

  listStudents():Student[] {
    return this.students;
  }

  addStudent( stud: Student){
    this.students.push(stud);
  }

  deleteStudent( stud: Student){
    //supprimer le produit prod du tableau produits
    const index = this.students.indexOf(stud, 0);
    if (index > -1) {
    this.students.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    }

    consultStudent(id:number): Student{
      this.student = this.students.find(s => s.id == id)!;
      return this.student;
      }

    updateStudent(s: Student){
      this.deleteStudent(s);
      this.addStudent(s);
      this.sortStudents
    }

    sortStudents(){
      this.students = this.students.sort((n1,n2) => {
        if (n1.id > n2.id) {
          return 1;
        }
        if (n1.id < n2.id) {
          return -1;
        }
          return 0;
      });
    }

    listCategorys():Category[]{
      return this.categorys;
    }

    consultCategory(id:number): Category{
      return this.categorys.find(cat => cat.idCat == id)!;
      }
}