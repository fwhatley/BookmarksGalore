import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './views/viewsample/orders/orders.component';
import { OrderListComponent } from './views/viewsample/order-list/order-list.component';
import { OrdersService } from './services/orders.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { ViewsampleComponent } from './views/viewsample/viewsample.component';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';
import {HomeModule} from './views/home/home.module';
import {PagenotfoundModule} from './views/pagenotfound/pagenotfound.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ViewsampleModule} from './views/viewsample/viewsample.module';

@NgModule({
  declarations: [
    AppComponent,
    // OrdersComponent, // might move to view samp comp
    // OrderListComponent, // might move to view samp comp
    // HomeComponent,
    FooterComponent,
    HeaderComponent,
    // ViewsampleComponent,
    // PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,

    HomeModule,
    PagenotfoundModule,
    ViewsampleModule,
  ],
  // providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
