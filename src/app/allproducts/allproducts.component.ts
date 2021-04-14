import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service.service';

export class Product {
  constructor(
    public productId: number,
    public productName: string,
    public unitPrice: number,
    public unitsInStock: number,
    public image: string
  ) {
  }
} 

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
  animations: []
})
export class AllproductsComponent implements OnInit {
  title = 'assignment-tanyo-app'
  allProducts: Product[];
  constructor(private products: ProductServiceService) {
    this.allProducts = [];
    this.products.getData().subscribe((allProducts: Product[]) => {
      console.log(allProducts);
      this.allProducts = allProducts;
    })
  }
  ngOnInit(): void {
  }
}
