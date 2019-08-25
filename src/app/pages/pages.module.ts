import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyingComponent } from './buying/buying.component';
import { AdsComponent } from './ads/ads.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BuyingComponent, AdsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BuyingComponent,
    AdsComponent
  ]
})
export class PagesModule { }
