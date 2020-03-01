import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from '../pages/pages.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule {
}
