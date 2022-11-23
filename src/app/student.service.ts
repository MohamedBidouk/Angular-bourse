import { Injectable } from '@angular/core';
import { Student } from './model/student.model';
import { Category } from './model/category.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryWrapper } from './model/categoryWrapped.model';
import { AuthService } from './services/auth.service';

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
  constructor(private http : HttpClient,
              private authService: AuthService) {
    
  }

  listStudents():Observable<Student[]> {
    /* let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) */
    return this.http.get<Student[]>(this.apiURL+"/all"/* ,{headers:httpHeaders} */);
  }

  addStudent( stud: Student): Observable<Student>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Student>(this.apiURL, stud, {headers:httpHeaders});
  }

  deleteStudent( id: number){
    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.delete(url, {headers:httpHeaders});
    }

    deleteCategory( id: number){
      const url = `${this.apiURLCat}/${id}`;
      console.log(this.apiURLCat)
        return this.http.delete(url);
      }

    consultStudent(id:number): Observable<Student>{
      const url = `${this.apiURL}/${id}`;
      
        return this.http.get<Student>(url);
      }

    updateStudent(stud: Student): Observable<Student>{

        return this.http.put<Student>(this.apiURL, stud);
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
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<CategoryWrapper>(this.apiURLCat,{headers:httpHeaders});
    }

    /*consultCategory(id:number): Category{
      return this.categorys.find(cat => cat.idCat == id)!;
      } */

  searchPerCategory(idCat: number): Observable<Student[]>{
    const url = `${this.apiURL}/candidscat/${idCat}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Student[]>(url,{headers:httpHeaders});
  }    

  searchPerFirstname(name: string): Observable<Student[]>{
    const url = `${this.apiURL}/candidsByFirstname/${name}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Student[]>(url,{headers:httpHeaders});
  }    

  addCategory( cat: Category):Observable<Category>{
    return this.http.post<Category>(this.apiURLCat, cat, httpOptions);
    }
}