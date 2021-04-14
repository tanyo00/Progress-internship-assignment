import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {Product} from '../outofstock/outofstock.component';





@Component({
  selector: 'app-instock',
  templateUrl: './instock.component.html',
  styleUrls: ['./instock.component.css']
})
export class InstockComponent implements OnInit {

  inStockProducts: Product[];
  constructor(private products: ProductServiceService) { 
    this.inStockProducts = [];
    this.products.getData().subscribe((allProducts: Product[]) => {
      let inStock = allProducts.filter(product => product.UnitsInStock > 0);
      this.inStockProducts = inStock;
    });
  }
  ngOnInit(): void {
  }

}
