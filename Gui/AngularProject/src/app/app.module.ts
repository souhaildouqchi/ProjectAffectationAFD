import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ShowProComponent } from './project/show-pro/show-pro.component';
import { AddEditProComponent } from './project/add-edit-pro/add-edit-pro.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { ShowConsComponent } from './consultant/show-cons/show-cons.component';
import { AddEditConsComponent } from './consultant/add-edit-cons/add-edit-cons.component';
import{SharedService} from "./shared.service";
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ShowProComponent,
    AddEditProComponent,
    ConsultantComponent,
    ShowConsComponent,
    AddEditConsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
