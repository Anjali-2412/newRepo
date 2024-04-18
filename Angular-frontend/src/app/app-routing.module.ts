import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ListByIdComponent } from './list-by-id/list-by-id.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { DeleteComponentComponent } from './delete-component/delete-component.component';

const routes: Routes = [

  {path:'create-student' , component:CreateStudentComponent },
  {path:'create-student1/:params' , component:CreateStudentComponent },
  {path:'list-student', component:ListStudentComponent},
 {path:'get-list-by-id', component:ListByIdComponent},
 {path:'update-student/:params', component:UpdateComponentComponent},
 {path:'delete/:params', component:DeleteComponentComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
