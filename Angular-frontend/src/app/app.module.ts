import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FormsModule } from '@angular/forms';
import { ListStudentComponent } from './list-student/list-student.component';
import { ListByIdComponent } from './list-by-id/list-by-id.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { DeleteComponentComponent } from './delete-component/delete-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    ListStudentComponent,
    ListByIdComponent,
    UpdateComponentComponent,
    DeleteComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
