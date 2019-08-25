import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavtabsComponent } from './navtabs/navtabs.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    NavtabsComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ] ,
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    NavtabsComponent
  ]
})
export class LayoutModule { }
