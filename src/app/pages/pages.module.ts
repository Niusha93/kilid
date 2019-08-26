import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BuyingComponent } from "./buying/buying.component";
import { AdsComponent } from "./ads/ads.component";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [BuyingComponent, AdsComponent],
  imports: [CommonModule, SharedModule, HttpClientModule],
  exports: [BuyingComponent, AdsComponent]
})
export class PagesModule {}
