import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {UiComponentsModule} from './ui.components/ui.components.module';
import { ServicesModule } from './services/services.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        // third party modules
        BrowserModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        HttpClientModule,

        // custom modules
        ServicesModule,
        // UiComponentsModule,

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
