import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'cart', loadChildren: () => import('../cart/cart.module').then(m => m.CartModule) },
  { path: 'thanhtoan', component:ThanhToanComponent},
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
