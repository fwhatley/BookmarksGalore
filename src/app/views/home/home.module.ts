import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home.routing.module';
import {UiComponentsModule} from '../../ui.components/ui.components.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UiComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
