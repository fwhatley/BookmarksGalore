import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewsampleComponent} from '../views/viewsample/viewsample.component';
import {ViewsampleRoutingModule} from '../views/viewsample/viewsample.routing.module';
import {OrderListComponent} from '../views/viewsample/order-list/order-list.component';
import {OrdersComponent} from '../views/viewsample/orders/orders.component';
import {FormsModule} from '@angular/forms';
import {PagesComponent} from '../views/pages/pages.component';
import {PagesRoutingModule} from '../views/pages/pages.routing.module';
import {AppRoutingModule} from '../app-routing.module';
import {FirebaseService} from './firebase.service';


@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule
  ],
  entryComponents: [],
  exports: [],
  providers: [
    FirebaseService,
  ],
  bootstrap: []
})
export class ServicesModule { }
