import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-pro',
  templateUrl: './show-pro.component.html',
  styleUrls: ['./show-pro.component.css']
})
export class ShowProComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProjectList:any=[];
  ModalTitle:string;
  ActivateAddEditProComp:boolean=false;
  pro:any;

  ProjectIdFilter:string="";
  ProjectNameFilter:string="";
  ProjectListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshProList();
  }

  addClick(){
    this.pro={
      ProjectId:0,
      ProjectName:""
    }
    this.ModalTitle="Add Project";
    this.ActivateAddEditProComp=true;

  }

  editClick(item){
    this.pro=item;
    this.ModalTitle="Edit Project";
    this.ActivateAddEditProComp=true;
  } 

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteProject(item.ProjectId).subscribe(data=>{
        alert(data.toString());
        this.refreshProList();
      })
    }
  } 

  closeClick(){
    this.ActivateAddEditProComp=false;
    this.refreshProList();
  }


  refreshProList(){
    this.service.getProList().subscribe(data=>{
      this.ProjectList=data;
      this.ProjectListWithoutFilter=data;
    });
  }

  FilterFn(){
    var ProjectIdFilter = this.ProjectIdFilter;
    var ProjectNameFilter = this.ProjectNameFilter;

    this.ProjectList = this.ProjectListWithoutFilter.filter(function (el){
        return el.ProjectId.toString().toLowerCase().includes(
          ProjectIdFilter.toString().trim().toLowerCase()
        )&&
        el.ProjectName.toString().toLowerCase().includes(
          ProjectNameFilter.toString().trim().toLowerCase()
        )
    }); 
  } 

  sortResult(prop,asc){
    this.ProjectList = this.ProjectListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  } 

}