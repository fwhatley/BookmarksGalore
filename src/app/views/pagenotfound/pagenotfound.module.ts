import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component';
import {PagenotfoundRoutingModule} from '../pagenotfound/pagenotfound.routing.module';

@NgModule({
  declarations: [
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    PagenotfoundRoutingModule
  ],
  exports: [
    PagenotfoundComponent
  ]
})
export class PagenotfoundModule { }
