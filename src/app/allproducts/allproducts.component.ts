import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {IProduct} from "../Product";

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
  animations: []
})

export class AllproductsComponent implements OnInit {
  title = 'assignment-tanyo-app'
  allProducts: IProduct[];
  constructor(private products: ProductServiceService) {
    this.allProducts = [];
    this.products.getData().subscribe((allProducts: IProduct[]) => {
      this.allProducts = allProducts;
    })
  }
  ngOnInit(): void {
  }
}
