import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './catalog/catalog.component';
import {LandingComponent} from './landing/landing.component';

const routes: Routes = [
  {
    path: 'catalog',
    children: [
      {path: '', component: CatalogComponent},
      {path: ':id', component: CatalogComponent}
    ]
  },
  { path: '', component: LandingComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
