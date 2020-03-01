import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UrlGroupCardComponent} from './url.group.card/url.group.card.component';


@NgModule({
  declarations: [
    UrlGroupCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UrlGroupCardComponent,
  ]
})
export class UiComponentsModule { }
