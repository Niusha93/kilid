import { Component, OnInit } from "@angular/core";
import { CityService } from "src/app/services/city.service";

@Component({
  selector: "app-buying",
  templateUrl: "./buying.component.html",
  styleUrls: ["./buying.component.css"]
})
export class BuyingComponent implements OnInit {
  cities = [];
  search: string;
  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.loadCities();
  }

  loadCities() {
    this.cityService.getAll().subscribe(result => {
      this.cities = result;
      console.log(this.cities);
    });
  }
  searchHome(): void {
    if (this.search !== "") {
    }
  }
}
