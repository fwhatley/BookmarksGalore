import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewsampleComponent} from '../viewsample/viewsample.component';
import {ViewsampleRoutingModule} from '../viewsample/viewsample.routing.module';
import {OrderListComponent} from './order-list/order-list.component';
import {OrdersComponent} from './orders/orders.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ViewsampleComponent,
    OrderListComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    ViewsampleRoutingModule,
    FormsModule
  ]
})
export class ViewsampleModule { }
