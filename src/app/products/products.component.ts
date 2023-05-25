import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements AfterViewInit {
  displayedColumns: string[] = ['position','imageUrl', 'name', 'description', 'catName','price','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  position: number;
  imageUrl:string;
  name: string;
  description: string;
  catName: string;
  price:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,imageUrl:'https://images.wholesalesalwar.com/2022y/April/31392/Turquoise-Blue-Slub-Cotton-Casual-Wear-Hand-Work-Dress-Material-DS170-8.jpg', name: 'Cotton Salwar',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Salwar',price:634},
  {position: 2,imageUrl:'https://kesimg.b-cdn.net/images/312/2023y/April/40197/Light-Green-Net-Wedding-Wear-Embroidery-Work-Saree-SAMANTHA-1886.jpg', name: 'Net Wholesale Sarees ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Sarees',price:2634},
  {position: 3,imageUrl:'https://kesimg.b-cdn.net/images/312/2022y/August/34489/Maroon-Cotton-Regular-Wear-Plain-Shirt-BK2-6.jpg', name: 'Regular Fit Mens Shirts ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Shirts',price:1455},
  {position: 4,imageUrl:'https://kesimg.b-cdn.net/images/312/2023y/March/Maroon-Silk-Wholesale-Skirt-With-Crop-Top-8050A.jpg', name: 'Skirt With Crop Top ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Skirt & Top',price:1600},
  {position: 5,imageUrl:'https://kesimg.b-cdn.net/images/312/2022y/January/20101/Maroon-Velvet-Bridal-Wear-Sequins-Work-Lehenga-Choli-Zikkra22-22003.jpg', name: 'Wedding Wear Lehenga ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Lehenga ',price:6999},


   {position: 6,imageUrl:'https://kesimg.b-cdn.net/images/500/2022y/April/31392/Yellow-Slub-Cotton-Casual-Wear-Hand-Work-Dress-Material-DS170-9.jpg', name: 'Cotton Salwar',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Salwar',price:634},
   {position: 7,imageUrl:'https://kesimg.b-cdn.net/images/312/2023y/April/40197/Red-Net-Wedding-Wear-Embroidery-Work-Saree-SAMANTHA-1883.jpg', name: 'Net Wholesale Sarees ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Sarees',price:2634},
   {position: 8,imageUrl:'https://kesimg.b-cdn.net/images/350/2022y/August/34490/Grey-Cotton-Office-Wear-Plain-Shirt-BK3-3.jpg', name: 'Regular Fit Mens Shirts ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Shirts',price:1455},
   {position: 9,imageUrl:'https://kesimg.b-cdn.net/images/282/2023y/April/40316/Pink-Crepe-Silk-Party-Wear-Sequins-Work-Kids-Lehenga-Choli-LUCAYA-104%20(3).jpg', name: 'Skirt With Crop Top ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Skirt & Top',price:1455},
   {position: 10,imageUrl:'https://kesimg.b-cdn.net/images/312/2023y/April/40625/Yellow-Silk-Reception-Wear-Embroidery-Work-Lehenga-Choli-ANAARA-6002.jpg', name: 'Wedding Wear Lehenga ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Lehenga ',price:6999},

   {position: 11,imageUrl:'https://kesimg.b-cdn.net/images/500/2022y/April/31392/Maroon-Slub-Cotton-Casual-Wear-Hand-Work-Dress-Material-DS170-2.jpg', name: 'Cotton Salwar',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Salwar',price:634},
   {position: 12,imageUrl:'https://kesimg.b-cdn.net/images/312/2023y/April/40197/Black-Net-Wedding-Wear-Embroidery-Work-Saree-SAMANTHA-1881.jpg', name: 'Net Wholesale Sarees ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Sarees',price:2634},
   {position: 13,imageUrl:'https://kesimg.b-cdn.net/images/312/2023y/March/39537/Pink-Cotton-Casual-Wear-Printed-Combo-Short-Kurta-KUTTYPAPA3-1006.jpg', name: 'Regular Fit Mens Shirts ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Shirts',price:1455},
   {position: 14,imageUrl:'https://kesimg.b-cdn.net/images/350/2023y/March/Blue-Fancy-Crop-Top-Palazzo-With-Jacket-5637.jpg', name: 'Skirt With Crop Top ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Skirt & Top',price:1455},
   {position: 15,imageUrl:'https://kesimg.b-cdn.net/images/312/2023y/April/40625/Beige-Silk-Reception-Wear-Embroidery-Work-Lehenga-Choli-ANAARA-6001.jpg', name: 'Wedding Wear Lehenga ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Lehenga ',price:6999},

   {position: 16,imageUrl:'https://kesimg.b-cdn.net/images/500/2022y/April/31392/Rani-Slub-Cotton-Casual-Wear-Hand-Work-Dress-Material-DS170-1.jpg', name: 'Cotton Salwar',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Salwar',price:634},
   {position: 17,imageUrl:'https://kesimg.b-cdn.net/images/312/2023y/April/40197/Pink-Net-Wedding-Wear-Embroidery-Work-Saree-SAMANTHA-1887.jpg', name: 'Net Wholesale Sarees ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Sarees',price:2634},
   {position: 18,imageUrl:'https://kesimg.b-cdn.net/images/312/2022y/August/34488/Sky-Blue-Cotton-Casual-Wear-Plain-Shirt-BK1-2.jpg', name: 'Regular Fit Mens Shirts ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Shirts',price:1455},
   {position: 19,imageUrl:'https://kesimg.b-cdn.net/images/350/2023y/February/38896/Gajri-Jute-Silk-Party-Wear-Weaving-Kids-Lehenga-Choli-KIDSPATTU2-5.jpg', name: 'Skirt With Crop Top ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Skirt & Top',price:1455},
   {position: 20,imageUrl:'https://kesimg.b-cdn.net/images/282/2023y/April/40655/Maroon-Georgette-Wedding-Wear-Thread-Work-Lehenga-Choli-POSHAK5-52005%20(4).jpg', name: 'Wedding Wear Lehenga ',
   description:'First Wash Dry Clean Slub Cotton Salwar Kameez In Turquoise Blue',catName:'Lehenga ',price:6999}
  
  
];