import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouteDataModel} from './models/route.data.model';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    data: new RouteDataModel({
      id: 'home',
      displayName: 'Home',
      link: '/home'
    }),
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'viewsample',
    data: new RouteDataModel({
      id: 'viewsample',
      displayName: 'Viewsample',
      link: '/viewsample'
    }),
    loadChildren: () => import('./views/viewsample/viewsample.module').then(m => m.ViewsampleModule)
  },
  {
    path: '**',
    data: new RouteDataModel({
      id: 'pageNotFound',
      displayName: 'Page Not Found',
      link: '/home'
    }),
    loadChildren: () => import('./views/pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule)
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
