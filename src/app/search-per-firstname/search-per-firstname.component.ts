import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-search-per-firstname',
  templateUrl: './search-per-firstname.component.html',
  styleUrls: ['./search-per-firstname.component.css']
})
export class SearchPerFirstnameComponent implements OnInit {

  students! : Student[];
  firstname! : string;
  allStudents! : Student[];
  searchTerm! : string;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.listStudents().subscribe(studs => {
      console.log(studs);
      this.students = studs;
      });
  }

  searchFirstname(){
    this.studentService.searchPerFirstname(this.firstname).
    subscribe(studs => {
    this.students = studs;
    console.log(studs)});
    }

    onKeyUp(filterText : string){
      this.students = this.allStudents.filter(item =>
      item.firstName.toLowerCase().includes(filterText));
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
