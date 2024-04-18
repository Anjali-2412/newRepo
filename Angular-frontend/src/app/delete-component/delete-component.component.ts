import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-component.component.html',
  styleUrl: './delete-component.component.css'
})
export class DeleteComponentComponent implements OnInit{

 id:any;
msg:any;
  constructor(private http:HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ){}


  goToStudentList(){
    this.router.navigate(['/list-student']);
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['params'];
    console.log(this.id);
    console.log(this.route.snapshot.params['params']);

    let response = this.http.delete("http://localhost:8080/studentData/deleteStudent/"+this.id);
    response.subscribe((data)=>this.msg=data);
  
    console.log(this.msg);
    alert("deleted sucessfully !!")
   this.goToStudentList();
    // th is.delete(this.id);

   
  }
 public delete(id:number){
 
 }
}
