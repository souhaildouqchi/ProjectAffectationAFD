import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-pro',
  templateUrl: './add-edit-pro.component.html',
  styleUrls: ['./add-edit-pro.component.css']
})
export class AddEditProComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  @Input() pro:any;
  ProjectId:string;
  ProjectName:string;

  ngOnInit(): void {
    this.ProjectId=this.pro.ProjectId;
    this.ProjectName=this.pro.ProjectName;
  }

  addProject(){
    var val = {ProjectId:this.ProjectId,
                ProjectName:this.ProjectName};
    this.service.addProject(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateProject(){
    var val = {ProjectId:this.ProjectId,
      ProjectName:this.ProjectName};
    this.service.updateProject(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}





