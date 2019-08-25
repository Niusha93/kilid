import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {
  navLinks = [
    { path: 'buying', label: 'خرید' },
    { path: 'rent', label: 'رهن و اجاره' },
    { path: 'search-map', label: 'جستجو روی نقشه' },
    { path: 'price', label: 'قیمت خانه شما' },
    { path: 'info', label: 'اطلاعات بازار' },
    { path: 'agency', label: 'آژانس های املاک' },
    { path: 'ads', label: 'تبلیغات' },
    ];

  constructor() { }

  ngOnInit() {
  }

}
