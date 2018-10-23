import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './catalog/catalog.component';
import {LandingComponent} from './landing/landing.component';
import {CreateComponent} from './create/create.component';

const routes: Routes = [
  {
    path: 'catalog',
    children: [
      {path: '', component: CatalogComponent},
      {path: ':category', component: CatalogComponent},
      {path: 'template/:id', component: CreateComponent},
    ]
  },
  { path: '', component: LandingComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
