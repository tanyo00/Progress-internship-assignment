import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { InstockComponent } from './instock/instock.component';
import { OutofstockComponent } from './outofstock/outofstock.component';

const routes: Routes = [
  {path: "in-stock", component: InstockComponent},
  {path: "out-of-stock", component: OutofstockComponent},
  {path: "", component: AllproductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
