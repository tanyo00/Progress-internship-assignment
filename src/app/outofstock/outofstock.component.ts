import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service.service';

export class Product {
  constructor(
    public ProductID: number,
    public ProductName: string,
    public UnitPrice: number,
    public UnitsInStock: number,
    public image: string
  ) {

  }
} 


@Component({
  selector: 'app-outofstock',
  templateUrl: './outofstock.component.html',
  styleUrls: ['./outofstock.component.css']
})
export class OutofstockComponent implements OnInit {

  outOfStockProducts: Product[];
  constructor(private products: ProductServiceService) { 
    this.outOfStockProducts = [];
    this.products.getData().subscribe((allProducts: Product[]) => {
      let outOfStock = allProducts.filter(product => product.UnitsInStock === 0);
      this.outOfStockProducts = outOfStock;
    });
  }

  ngOnInit(): void {
  }

}
