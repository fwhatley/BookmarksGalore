import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewsampleComponent} from '../viewsample/viewsample.component';
import {ViewsampleRoutingModule} from '../viewsample/viewsample.routing.module';
import {OrderListComponent} from '../viewsample/order-list/order-list.component';
import {OrdersComponent} from '../viewsample/orders/orders.component';
import {FormsModule} from '@angular/forms';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages.routing.module';


@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    PagesComponent,
  ]
})
export class PagesModule { }
