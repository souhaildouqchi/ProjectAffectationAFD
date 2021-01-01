import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-cons',
  templateUrl: './show-cons.component.html',
  styleUrls: ['./show-cons.component.css']
})
export class ShowConsComponent implements OnInit {

  constructor(private service:SharedService) { }

  ConsultantList:any=[];

  ModalTitle:string;
  ActivateAddEditConsComp:boolean=false;
  cons:any;

  ConsultantIdFilter:string="";
  ConsultantNameFilter:string="";
  ConsultantListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshConsList()
  }

  addClick(){
    this.cons={
      ConsultantId:0,
      ConsultantName:""
      // add more attributes here 
    }
    this.ModalTitle="Add Consultant";
    this.ActivateAddEditConsComp=true;

  }

  editClick(item){
    this.cons=item;
    this.ModalTitle="Edit Consultant";
    this.ActivateAddEditConsComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteConsultant(item.ConsultantId).subscribe(data=>{
        alert(data.toString());
        this.refreshConsList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditConsComp=false;
    this.refreshConsList();
  }


  refreshConsList(){
    this.service.getConsList().subscribe(data=>{
      this.ConsultantList=data;
      this.ConsultantListWithoutFilter=data;
    });
  }

  FilterFn(){
    var ConsultantIdFilter = this.ConsultantIdFilter;
    var ConsultantNameFilter = this.ConsultantNameFilter;

    this.ConsultantList = this.ConsultantListWithoutFilter.filter(function (el){
        return el.ConsultantId.toString().toLowerCase().includes(
          ConsultantIdFilter.toString().trim().toLowerCase()
        )&&
        el.ConsultantName.toString().toLowerCase().includes(
          ConsultantNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.ConsultantList = this.ConsultantListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}

