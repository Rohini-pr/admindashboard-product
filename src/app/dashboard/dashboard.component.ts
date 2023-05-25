import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ProgressSpinnerComponent } from '../progress-spinner/progress-spinner.component';
import { VisitorsProfileComponent } from '../visitors-profile/visitors-profile.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // Table Elements
  displayedColumns = ['imageUrl', 'name','time'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog:MatDialog) {}
  openDialog(){
    this.dialog.open(ProgressSpinnerComponent,{
      width:'250px',
      data:"rightclick"
    })
  }
  openProfile(){
    this.dialog.open(VisitorsProfileComponent,{
      width:'300px',
      data:"rightclick"
    })
  }
}
export interface PeriodicElement {
  name: string;
  imageUrl:string;
  content : string;
  time:string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {imageUrl:'https://www.goodmorningimageshddownload.com/wp-content/uploads/2019/12/Beautiful-Girl-Images-2.jpg', 
  name: 'Gayathri Girish ', content:'Ordered one dupatta',time:'2 min ago' },
  {imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qcX3gC-HIKVzG_TTK44Uw7Dcj55iu7qklQ&usqp=CAU', 
  name: 'Arun Das ',content:'Ordered two shirts',time:'5 min ago'  },
  {imageUrl:'https://i.pinimg.com/474x/52/f7/d7/52f7d7fe62233b84d4105bceb12382cf.jpg', 
  name: 'Venu Nila',content:'Ordered one shirt',time:'6 min ago'  },
  {imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06bCJfY6vyAxns8ZFTMtiBB_80yUI2sfoaApG3AWzGVBQArjl-ivod9IKrc4uzdytXog&usqp=CAU', 
  name: 'Avani krishna ', content:'Ordered two Saree',time:'8 min ago' },
  {imageUrl:'https://cdn.pixabay.com/photo/2020/04/18/06/34/man-5057800_1280.jpg', 
  name: 'Akash Raj ', content:'Ordered one shirt',time:'8 min ago' },
  {imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFP9WSgW3BuZ0dg2-zD0CrbOG2ot8yzpdIjQ&usqp=CAU', 
  name: 'Deepu K ', content:'Ordered one shirt',time:'9 min ago' }
  
];