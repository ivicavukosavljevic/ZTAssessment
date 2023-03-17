import { Component } from '@angular/core';
import { OnserviceService } from 'src/app/onservice.service';

@Component({
  selector: 'app-ctm001002',
  templateUrl: './ctm001002.component.html',
  styleUrls: ['./ctm001002.component.css']
})
export class Ctm001002Component {
  newfolder:boolean=false
  val!:any
  editItem:boolean=false
  editItem1:boolean=false
  
  constructor(private service1:OnserviceService,private service2:OnserviceService,private service3:OnserviceService,private service4:OnserviceService,private service5:OnserviceService){

  }
  ngOnInit(){
    this.service1.subject1.asObservable().subscribe((x:any)=>{
      this.newfolder=x
    })
    this.service2.subject2.asObservable().subscribe((y:any)=>{
      this.newfolder=y
    })
    this.service3.subject3.asObservable().subscribe((y:any)=>{
      this.val=y
    })
    this.service4.subject4.asObservable().subscribe((y:any)=>{
      this.editItem=y
    })
    this.service4.subject4.asObservable().subscribe((y:any)=>{
      this.editItem=y
    })
    this.service5.subject5.asObservable().subscribe((y:any)=>{
      this.editItem1=!y
    })

  }

}
