import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrl: './update-component.component.css'
})
export class UpdateComponentComponent implements OnInit{

  id:any;
 msgg:any;
 msg:any;
constructor(private http:HttpClient,
  private route: ActivatedRoute
){}

public form={
  data: {
    id:null,
    rollNo:null,
    name: null,
    address: null
  }
}



  ngOnInit(): void {
    this.id=this.route.snapshot.params;
    console.log(this.id);
  console.log(this.route.snapshot.params['params']);
  this.update(this.route.snapshot.params['params']);
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
 

  public up(){
    alert("data inserted!!!");
    console.log(this.form.data);
    let response = this.http.post("http://localhost:8080/studentData/saveStudent",this.form.data,{responseType:'text' as 'json'});
    response.subscribe((data)=>this.msg=data);

    // not required below line due to id 
       // console.log(this.msg);
       
    alert("saved sucessfully!")
  }

}
