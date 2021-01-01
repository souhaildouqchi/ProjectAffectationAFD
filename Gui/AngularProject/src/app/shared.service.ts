import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:5001/api";


  constructor(private http:HttpClient) { }

  getProList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Project');
  }

  addProject(val:any){
    return this.http.post(this.APIUrl+'/Project',val);
  }

  updateProject(val:any){
    return this.http.put(this.APIUrl+'/Project',val);
  }

  deleteProject(val:any){
    return this.http.delete(this.APIUrl+'/Project/'+val);
  }


  getConsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Consultant');
  }

  addConsultant(val:any){
    return this.http.post(this.APIUrl+'/Consultant',val);
  }

  updateConsultant(val:any){
    return this.http.put(this.APIUrl+'/Consultant',val);
  }

  deleteConsultant(val:any){
    return this.http.delete(this.APIUrl+'/Consultant/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }

}