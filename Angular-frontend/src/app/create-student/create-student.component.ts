import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent implements OnInit {
  [x: string]: any;


  constructor(private http:HttpClient,
    private route: ActivatedRoute,
    private router: Router

  ){}

  ngOnInit(): void {
    this.update(this.route.snapshot.params['params']);
  }

msg :any;
public form={
  data: {
    id:null,
    rollNo:null,
    name: null,
    address: null
  }
}


public update(id:number){
  let response = this.http.get("http://localhost:8080/studentData/getData/"+id);
 response.subscribe((data)=>{
  console.log(data),
this.dataPopulate(this.form.data, data)
});

//  console.log(this.msgg);
 
}
public dataPopulate(form :any, data :any){
  form.id=data.id;
  form.rollNo=data.rollNo;
  form.address=data.address;
  form.name=data.name;

}

goToStudentList(){
  this.router.navigate(['/list-student']);
}





  public create(){
    alert("data inserted!!!");
    console.log(this.form.data);
    let response = this.http.post("http://localhost:8080/studentData/saveStudent",this.form.data,{responseType:'text' as 'json'});
    response.subscribe((data)=>this.msg=data);

    // not required below line due to id 
       // console.log(this.msg);
       
    alert("saved sucessfully!")
    this.goToStudentList();
  }
}

