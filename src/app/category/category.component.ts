import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements AfterViewInit{

  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Tops'},
  {position: 2, name: 'Pants'},
  {position: 3, name: 'Sarees'},
  {position: 4, name: 'Shirts'},
  {position: 5, name: 'Lehanga'},
  {position: 6, name: 'Salwar'},
  {position: 7, name: 'Kidswear'},
  {position: 8, name: 'Davani'},
  {position: 9, name: 'Skirts'},
];
