import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent {
  id!:number
  constructor(private route:ActivatedRoute){
    this.route.params.subscribe(res => {
      this.id = res['id']
    })

    console.log(this.id);
    
  }
}
