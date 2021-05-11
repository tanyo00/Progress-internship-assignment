import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {IProduct} from "../Product";





@Component({
  selector: 'app-instock',
  templateUrl: './instock.component.html',
  styleUrls: ['./instock.component.css']
})


export class InstockComponent implements OnInit {
  inStockProducts: IProduct[];
  constructor(private products: ProductServiceService) { 
    this.inStockProducts = [];
    this.products.getData().subscribe((allProducts: IProduct[]) => {
      let inStock = allProducts.filter(product => product.UnitsInStock > 0);
      this.inStockProducts = inStock;
    });
  }
  ngOnInit(): void {
  }

}
