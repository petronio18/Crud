import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from'./views/home/home.component';
import {ProductCrudComponent} from '../app/views/product-crud/product-crud.component';
import {ProductCreateComponent} from './components/product/product-create/product-create.component';

//Configuração das rotas.
const routes: Routes = [
 {
   path:"",
   component: HomeComponent 
 },{
   path:"products",
   component: ProductCrudComponent
 },{
  path: "products/create",
  component: ProductCreateComponent
 }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
