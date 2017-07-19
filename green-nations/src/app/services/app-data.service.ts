import { Injectable } from '@angular/core';
import { Country } from "../models/country";
import { UserService } from "./user.service";
import { Observable } from "rxjs/RX";


@Injectable()
export class AppDataService {

    private countries : Array<Country> = [
    { id: 1, name:"Switzerland",  epiIndex: 87.67 },
    { id: 2, name:"Luxembourg",   epiIndex: 83.29 },
    { id: 3, name:"Australia", epiIndex: 82.4 },
    { id: 4, name:"Singapore", epiIndex: 81.78 },
    { id: 5, name:"Czech Republic", epiIndex: 81.47 },
    { id: 6, name:"Germany", epiIndex: 80.47 },
    { id: 7, name:"Spain", epiIndex: 79.09 },
    { id: 8, name:"Austria", epiIndex: 78.32 },
    { id: 9, name:"Sweden", epiIndex: 78.09 },
    { id: 10, name:"Norway", epiIndex: 78.04 }
  ];
    private id: number = 10; 

  constructor (private userService: UserService) {}

  getCountries(): Observable<Country[]> {
      return Observable.of(this.countries);
  }

   getCountriesSlice(count: number): Observable<Country[]> {
        if (count == 0) {
            return Observable.of(this.countries);
        }
        return Observable.of(this.countries.slice(0, count));
  }

  getCountry(id: number): Observable<Country> {
      let country = this.countries.find(c => c.id == id);
      return Observable.of(country);
  }

  updateCountry(country: Country): Observable<Country> {
      this.countries = this.countries.map(c => 
          (c.id == country.id) ?  country : c
      );
      return Observable.of(country);
  }

  createCountry(country: Country): Observable<Country> {
    let newCountry = {...country, id: ++this.id};
    this.countries.push(newCountry);
    return Observable.of(newCountry);
  }

  deleteCountry(id: number): Observable<Country[]> {
      this.countries = this.countries.filter(c => c.id != id);
      return Observable.of(this.countries);
  }

}