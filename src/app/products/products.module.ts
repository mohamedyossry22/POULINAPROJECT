import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
