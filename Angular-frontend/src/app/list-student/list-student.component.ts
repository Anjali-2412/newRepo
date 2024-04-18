import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent implements OnInit {
  msg :any;
  constructor(private http:HttpClient,
    private router: Router){}

  ngOnInit(){
    // alert("list generated");
    let response = this.http.get("http://localhost:8080/studentData/getAllStudent");
    response.subscribe((data)=>this.msg=data);
    console.log(this.msg);

  }
  // updateEmployee(id:number){
  //   this.router.navigate(['update-student/'+id]);
  // }

updateByCreateComponent(id:number){
  this.router.navigate(['create-student1/'+id]);
}
delete(id:number){
  this.router.navigate(['delete/'+id]);
}
}
