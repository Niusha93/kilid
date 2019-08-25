import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  kilids = [
    {value: 'کیلید', viewValue: 'کیلید'},
    {value: 'درباره کیلید', viewValue: 'درباره کیلید'},
    {value: 'بلاگ', viewValue: 'بلاگ'},
    {value: 'تماس با ما', viewValue: 'تماس با ما'},
    {value: 'فرصت های شغلی', viewValue: 'فرصت های شغلی'},
    {value: 'آژانس های املاک', viewValue: 'آژانس های املاک'},
  ];
  searchs = [
    {value: 'جستجو', viewValue: 'جستجو'},
    {value: 'خرید', viewValue: 'خرید'},
    {value: 'رهن و اجاره', viewValue: 'رهن و اجاره'},
    {value: 'چستجو روی نقشه', viewValue: 'چستجو روی نقشه'},
    {value: 'سپردن ملک', viewValue: 'سپردن ملک'},
  ];
  infos = [
    {value: 'اطلاعات کلیدی', viewValue: 'اطلاعات کلیدی'},
    {value: 'قیمت خانه شما', viewValue: 'قیمت خانه شما'},
    {value: 'فرصت های بازار مسکن', viewValue: 'فرصت های بازار مسکن'}
  ];
  apps = [
    {value: 'اپلیکیش', viewValue: 'اپلیکیش'},
    {value: 'مشاورین (iOS Android) ', viewValue: 'مشاورین (iOS Android)'},
    {value: 'کاربران (iOS, Android)', viewValue: 'کاربران (iOS, Android)'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
