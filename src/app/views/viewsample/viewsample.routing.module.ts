import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewsampleComponent} from '../viewsample/viewsample.component';

export const routes: Routes = [
  {
    path: '',
    component: ViewsampleComponent,
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
export class ViewsampleRoutingModule {
}
