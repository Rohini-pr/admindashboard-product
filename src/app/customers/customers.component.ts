import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'mail', 'contactno','date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  position: number;
  name: string;
  mail: string;
  contactno: number;
  date:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Aswathy', mail: 'aswathy@gmail.com', contactno: 8596759243, date:'01/05/2023'},
  {position: 2, name: 'Arun', mail: 'arun@gmail.com', contactno: 9696759243, date:'01/05/2023'},
  {position: 3, name: 'Lalu', mail: 'lalu@gmail.com', contactno: 8396796973, date:'01/05/2023'},
  {position: 4, name: 'Rama Devi', mail: 'remadevi@gmail.com', contactno: 7596759243, date:'01/05/2023'},
  {position: 5, name: 'Roshan', mail: 'roshan@gmail.com', contactno: 8596759243, date:'01/05/2023'},
  {position: 6, name: 'Kavya', mail: 'kavya@gmail.com', contactno: 6596759243, date:'01/05/2023'},
  {position: 7, name: 'Rohith', mail: 'rohith@gmail.com', contactno: 8596759243, date:'01/05/2023'},
  {position: 8, name: 'Keerthi', mail: 'keerthi@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 9, name: 'Silpa', mail: 'silpa@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 10, name: 'Alex', mail: 'alex@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 11, name: 'Haritha', mail: 'haritha@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 12, name: 'Ammu', mail: 'ammu@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 13, name: 'Anu', mail: 'anu@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 14, name: 'Sandra', mail: 'sandra@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 15, name: 'Parvathy', mail: 'parvathy@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 16, name: 'Pranav', mail: 'pranav@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 17, name: 'Hema', mail: 'hema@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 18, name: 'Janaki', mail: 'janaki@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 19, name: 'Kaveri', mail: 'kaveri@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 20, name: 'Sindhu', mail: 'sindhu@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 21, name: 'Sam', mail: 'sam@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 22, name: 'Arpitha', mail: 'arpitha@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 23, name: 'Sangeeth', mail: 'sangeeth@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 24, name: 'Robin', mail: 'robin@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 25, name: 'Ravi', mail: 'ravi@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 26, name: 'Deepthi', mail: 'deepthi@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 27, name: 'Malavika', mail: 'malu@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 28, name: 'Kiran', mail: 'kiran@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 28, name: 'Gayathri', mail: 'gayatri@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 29, name: 'Harini', mail: 'harini@gmail.com', contactno: 9596700043, date:'01/05/2023'},
  {position: 30, name: 'Jagath', mail: 'jagath@gmail.com', contactno: 9596700043, date:'01/05/2023'}  
];