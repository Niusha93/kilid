import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CityModel } from "../models/city.model";
import { ResponseModel } from "../models/result.model";

@Injectable()
export class CityService {
  mockData = [
    { id: 1, title: "تهران", code: "21" },
    { id: 1, title: "اصفهان", code: "34" },
    { id: 1, title: "مشهد", code: "77" },
    { id: 1, title: "تبریز", code: "99" },
    { id: 1, title: "ساری", code: "32" }
  ];
  constructor(private http: HttpClient) {}

  getAll(): Observable<CityModel[]> {
    // bayad vaghean api call beshe ama nemikonim!
    // return this.http.post<any>("api/city/getall", {})

    return of(this.mockData);
  }
  getById(id): Observable<ResponseModel<CityModel>> {
    return this.http.post<any>("api/city/byid", { id: id });
  }

  save(news: CityModel): Observable<any> {
    return this.http.post<any>("api/city/save", news);
  }

  delete(id: number): Observable<any> {
    return this.http.post<any>("api/city/delete", { id: id });
  }
}
