import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyingComponent } from 'src/app/pages/buying/buying.component';
import { AdsComponent } from 'src/app/pages/ads/ads.component';

const routes: Routes = [
  { path: '', component: BuyingComponent },
  { path: 'buying', component: BuyingComponent },
  { path: 'rent', component: AdsComponent },
  { path: 'search-map', component: AdsComponent },
  { path: 'price', component: AdsComponent },
  { path: 'info', component: AdsComponent },
  { path: 'agency', component: AdsComponent },
  { path: 'ads', component: AdsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
