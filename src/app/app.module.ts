import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { LayoutModule } from "./layout/layout.module";
import { PagesModule } from "./pages/pages.module";
import { CommonModule } from "@angular/common";
import { CityService } from "./services/city.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    PagesModule,
    LayoutModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
