import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {IProduct} from '../Product';


@Component({
  selector: 'app-outofstock',
  templateUrl: './outofstock.component.html',
  styleUrls: ['./outofstock.component.css']
})
export class OutofstockComponent implements OnInit {

  outOfStockProducts: IProduct[];
  constructor(private products: ProductServiceService) { 
    this.outOfStockProducts = [];
    this.products.getData().subscribe((allProducts: IProduct[]) => {
      let outOfStock = allProducts.filter(product => product.UnitsInStock === 0);
      this.outOfStockProducts = outOfStock;
    });
  }

  ngOnInit(): void {
  }

}
