import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectComponent} from "./project/project.component"
import {ConsultantComponent} from "./consultant/consultant.component"
const routes: Routes = [
  {path:'project',component:ProjectComponent},
  {path:'consultant',component:ConsultantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
