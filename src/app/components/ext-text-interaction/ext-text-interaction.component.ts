import { Component } from '@angular/core';

@Component({
  selector: 'app-ext-text-interaction',
  templateUrl: './ext-text-interaction.component.html',
  styleUrls: ['./ext-text-interaction.component.css']
})
export class ExtTextInteractionComponent {
  text="Lorem ipsum dolor sit amet....";
  imgArea:any[][]=[[]];
  table:any[][][]=[];
  inputprompt="";
  inputpromptstyle=[false,false,false];
  Active1=1;
  Active2=1;
  Active3=0;
  x=1;
  bottomSymbol: boolean = true;
  Condition1: boolean = true;
  Condition2: boolean = true;  
  
  
  dismissbox(val:number){             
    if(val==0)this.Condition1=false;
    else this.Condition2=false; 
  }
  dismiss(){             
    this.bottomSymbol=false;
                            
  }
  boldText(){
    if(this.Active2==1){
    if(this.inputpromptstyle[0]==false)this.inputpromptstyle[0]=true;
    else this.inputpromptstyle[0]=false}
    else if(this.imgArea[this.Active1][0]=='text'){
      if(this.imgArea[this.Active1][2]==false)this.imgArea[this.Active1][2]=true;
      else this.imgArea[this.Active1][2]=false}
    else if(this.imgArea[this.Active1][0]=='table'){
      if(this.table[this.imgArea[this.Active1][1]][this.Active3][0]=='text'){
        if(this.table[this.imgArea[this.Active1][1]][this.Active3][2]==false)this.table[this.imgArea[this.Active1][1]][this.Active3][2]=true;
        else this.table[this.imgArea[this.Active1][1]][this.Active3][2]=false}
    }
    console.log(this.table);
  }

  italicText(){
    if(this.Active2==1){
    if(this.inputpromptstyle[1]==false)this.inputpromptstyle[1]=true;
    else this.inputpromptstyle[1]=false}
    else if(this.imgArea[this.Active1][0]=='text'){
      if(this.imgArea[this.Active1][3]==false)this.imgArea[this.Active1][3]=true;
      else this.imgArea[this.Active1][3]=false}
    else if(this.imgArea[this.Active1][0]=='table'){
        if(this.table[this.imgArea[this.Active1][1]][this.Active3][0]=='text'){
          if(this.table[this.imgArea[this.Active1][1]][this.Active3][3]==false)this.table[this.imgArea[this.Active1][1]][this.Active3][3]=true;
          else this.table[this.imgArea[this.Active1][1]][this.Active3][3]=false}
      }
  }
run(A:number,k2:number){
  if(this.table[A][k2][0]=='img'){
    let imginput = prompt("Please enter img link", "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666326358/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264261_femz6d.png/mxw_2048,s_webp,f_auto")||"";
    this.table[A][k2].push(imginput);
  }
  else{
    let videoinput = prompt("Please enter video link", "assets/movie.mp4")||"";
    this.table[A][k2].push(videoinput);
  }
}
media(value:number){
  if(this.Active2!=2)return;
 if(value==0){
  let img = prompt("Please enter img link", "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666326358/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264261_femz6d.png/mxw_2048,s_webp,f_auto");
this.imgArea.push(["img",img]);
 }
 else if(value==1){
  let video = prompt("Please enter img link", "assets/movie.mp4");
  this.imgArea.push(["video",video]);
 }
 else if(value==2){
  this.imgArea.push(["text",""]);
 }
 else {
  this.imgArea.push(["table",this.table.length]);
  console.log(this.imgArea[this.imgArea.length-1]);
  this.table.push([]);//this.table.push([[],[],[]]);
 }
}
  underlineText(){
    if(this.Active2==1){
    if(this.inputpromptstyle[2]==false)this.inputpromptstyle[2]=true;
    else this.inputpromptstyle[2]=false;}
    else if(this.imgArea[this.Active1][0]=='text'){
      if(this.imgArea[this.Active1][4]==false)this.imgArea[this.Active1][4]=true;
      else this.imgArea[this.Active1][4]=false;}
      else if(this.imgArea[this.Active1][0]=='table'){
        if(this.table[this.imgArea[this.Active1][1]][this.Active3][0]=='text'){
          if(this.table[this.imgArea[this.Active1][1]][this.Active3][4]==false)this.table[this.imgArea[this.Active1][1]][this.Active3][4]=true;
          else this.table[this.imgArea[this.Active1][1]][this.Active3][4]=false}
      }
  }
}