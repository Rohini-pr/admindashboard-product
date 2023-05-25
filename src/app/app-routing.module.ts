import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // path:http://localhost:4200/
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'', redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path:'customers',component:CustomersComponent
  },
  {
    path:'category',component:CategoryComponent
  },
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'orders', component:OrdersComponent
  },
  {
    path:'contacts',component:ContactsComponent
  },
  // page-not-found
  {
    path:'**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
