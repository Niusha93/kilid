import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() closeSideNavigation = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('oooo');
  }

  onToggleClose() {
    this.closeSideNavigation.emit();
  }
}
