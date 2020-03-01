import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {
    path: '',
    component: PagenotfoundComponent,
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
export class PagenotfoundRoutingModule {
}
