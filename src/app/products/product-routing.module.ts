import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProdutListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsGuard } from './product-details.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path : 'products', component : ProdutListComponent},
      {path : 'products/:id', component : ProductDetailsComponent,canActivate:[ProductDetailsGuard]},
    ])
  ],
  exports:[RouterModule]
})
export class ProductRoutingModule { }
