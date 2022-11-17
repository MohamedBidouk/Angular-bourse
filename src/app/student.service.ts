import { Injectable } from '@angular/core';
import { Student } from './model/student.model';
import { Category } from './model/category.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryWrapper } from './model/categoryWrapped.model';

const httpOptions = { headers: new HttpHeaders( {'Content-Type': 'application/json'} )};

@Injectable({
providedIn: 'root'
})
export class StudentService {

  apiURL: string = "http://localhost:8080/Bourse-app/api";
  apiURLCat: string = "http://localhost:8080/Bourse-app/cat";

  students! : Student[]; //un tableau de Produit
  student! : Student;
  //categorys : Category[];
  constructor(private http : HttpClient) {
    
  }

  listStudents():Observable<Student[]> {
    return this.http.get<Student[]>(this.apiURL);
  }

  addStudent( stud: Student): Observable<Student>{
    return this.http.post<Student>(this.apiURL, stud, httpOptions);
  }

  deleteStudent( id: number){
    const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
    }

    consultStudent(id:number): Observable<Student>{
      const url = `${this.apiURL}/${id}`;
        return this.http.get<Student>(url);
      }

    updateStudent(stud: Student): Observable<Student>{
      return this.http.put<Student>(this.apiURL, stud, httpOptions);
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

    listCategorys():Observable<CategoryWrapper>{
      return this.http.get<CategoryWrapper>(this.apiURLCat);
    }

    /*consultCategory(id:number): Category{
      return this.categorys.find(cat => cat.idCat == id)!;
      } */
}