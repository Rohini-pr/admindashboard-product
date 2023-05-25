import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements AfterViewInit{
  displayedColumns: string[] = ['position', 'name', 'contact', 'date','method','orderStatus','paymentStatus','details'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  position: number;
  name: string;
  contact: number;
  date:string;
  method:string;
  orderStatus:any;
  paymentStatus:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Arun S Nair', contact: 8846019122, date: '23/05/2023',method:'cash',
  orderStatus:'https://imgtr.ee/images/2023/05/07/aFV8Q.png',paymentStatus:'https://imgtr.ee/images/2023/05/07/ajLws.png'},
  {position: 2, name: 'Saranya Mohan', contact: 7846019122, date: '27/05/2023',method:'Gpay',
  orderStatus:'https://imgtr.ee/images/2023/05/04/aSBkM.png',paymentStatus:'https://imgtr.ee/images/2023/05/07/ajNVD.png'},
  {position: 3, name: 'Rohith Lal', contact: 6546019122, date: '22/05/2023',method:'creditcard',
  orderStatus:'https://imgtr.ee/images/2023/05/04/aSBkM.png',paymentStatus:'https://imgtr.ee/images/2023/05/07/ajLws.png'},
  {position: 4, name: 'Venu Gopal', contact: 9846019122, date: '21/05/2023',method:'cash',
  orderStatus:'https://imgtr.ee/images/2023/05/07/aFV8Q.png',paymentStatus:'https://imgtr.ee/images/2023/05/07/ajLws.png'},
  {position: 5, name: 'Saranya Mohan', contact: 7846019122, date: '27/05/2023',method:'Gpay',
  orderStatus:'https://imgtr.ee/images/2023/05/04/aSBkM.png',paymentStatus:'https://imgtr.ee/images/2023/05/07/ajNVD.png'},
  {position: 6, name: 'Sanoop S Nair', contact: 8846019122, date: '23/05/2023',method:'cash',
  orderStatus:'https://imgtr.ee/images/2023/05/07/aFV8Q.png',paymentStatus:'https://imgtr.ee/images/2023/05/07/ajLws.png'},
  {position: 7, name: 'Arya Mohan', contact: 7846019122, date: '27/05/2023',method:'Gpay',
  orderStatus:'https://imgtr.ee/images/2023/05/04/aSBkM.png',paymentStatus:'https://imgtr.ee/images/2023/05/07/ajNVD.png'},
  {position: 8, name: 'Roshan', contact: 6546019122, date: '22/05/2023',method:'creditcard',
  orderStatus:'https://imgtr.ee/images/2023/05/04/aSBkM.png',paymentStatus:'https://imgtr.ee/images/2023/05/07/ajLws.png'},
  {position: 9, name: 'Franly', contact: 9846019122, date: '21/05/2023',method:'cash',
  orderStatus:'https://imgtr.ee/images/2023/05/07/aFV8Q.png',paymentStatus:'https://imgtr.ee/images/2023/05/07/ajLws.png'},
  {position: 10, name: 'Tino Tom', contact: 7846019122, date: '27/05/2023',method:'Gpay',
  orderStatus:'https://imgtr.ee/images/2023/05/04/aSBkM.png',paymentStatus:'https://imgtr.ee/images/2023/05/07/ajNVD.png'},
  {position: 11, name: 'Tom', contact: 8846019122, date: '23/05/2023',method:'cash',
  orderStatus:'https://imgtr.ee/images/2023/05/07/aFV8Q.png',paymentStatus:'https://imgtr.ee/images/2023/05/07/ajLws.png'},
  {position: 12, name: 'Jerry', contact: 7846019122, date: '27/05/2023',method:'Gpay',
  orderStatus:'https://imgtr.ee/images/2023/05/04/aSBkM.png',paymentStatus:'https://imgtr.ee/images/2023/05/07/ajNVD.png'},
  {position: 13, name: 'Arya', contact: 6546019122, date: '22/05/2023',method:'creditcard',
  orderStatus:'https://imgtr.ee/images/2023/05/04/aSBkM.png',paymentStatus:'https://imgtr.ee/images/2023/05/07/ajLws.png'},
  {position: 14, name: 'Gayatri', contact: 9846019122, date: '21/05/2023',method:'cash',
  orderStatus:'https://imgtr.ee/images/2023/05/07/aFV8Q.png',paymentStatus:'https://imgtr.ee/images/2023/05/07/ajLws.png'},
  {position: 15, name: 'Mohan', contact: 7846019122, date: '27/05/2023',method:'Gpay',
  orderStatus:'https://imgtr.ee/images/2023/05/04/aSBkM.png',paymentStatus:'https://imgtr.ee/images/2023/05/07/ajNVD.png'},
  
  
  
];
