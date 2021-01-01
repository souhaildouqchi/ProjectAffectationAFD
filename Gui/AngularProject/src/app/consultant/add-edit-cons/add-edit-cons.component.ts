import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-cons',
  templateUrl: './add-edit-cons.component.html',
  styleUrls: ['./add-edit-cons.component.css']
})
export class AddEditConsComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  @Input() cons:any;
  ConsultantId:string;
  ConsultantName:string;

  ngOnInit(): void {
    this.ConsultantId=this.cons.ConsultantId;
    this.ConsultantName=this.cons.ConsultantName;
  }

  addConsultant(){
    var val = {ConsultantId:this.ConsultantId,
                ConsultantName:this.ConsultantName};
    this.service.addConsultant(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateConsultant(){
    var val = {ConsultantId:this.ConsultantId,
      ConsultantName:this.ConsultantName};
    this.service.updateConsultant(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}





