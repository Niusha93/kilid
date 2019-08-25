import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buying',
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.css']
})
export class BuyingComponent implements OnInit {
  cities = [
    { value: 'تهران', viewValue: 'تهران' },
    { value: 'اصفهان', viewValue: 'اصفهان' },
    { value: 'بابل', viewValue: 'بابل' },
    { value: 'لاهیجان', viewValue: 'لاهیجان' },
    ];

    search: string;
  constructor() { }

  ngOnInit() {
  }

  searchHome(): void {
    if (this.search !== '') {
    }
  }

}
