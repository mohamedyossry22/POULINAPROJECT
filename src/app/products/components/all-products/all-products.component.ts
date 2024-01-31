import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit{

  products:any[]=[]
  constructor(private service:ProductsService , private router:Router){}
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.service.getAllProducts().subscribe((res:any) => {
      this.products=res
    })
  }


  routeToDetails(id:any) {
    this.router.navigateByUrl('/products/'+id)
  }

}
