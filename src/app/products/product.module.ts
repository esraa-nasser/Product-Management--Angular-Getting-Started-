import { NgModule } from '@angular/core';
import { ProdutListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailsComponent } from './product-details.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProdutListComponent,    
    ConvertToSpacesPipe,
    ProductDetailsComponent,
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
