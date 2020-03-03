import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PurchaseFormComponent} from './components/purchase-form/purchase-form.component';

const routes: Routes = [
  {path:"",component:PurchaseFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
