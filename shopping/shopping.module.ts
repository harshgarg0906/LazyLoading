import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ShoppingListComponent, 
    ShoppingCartComponent,
    ShoppingComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
  ]
})
export class ShoppingModule { }
