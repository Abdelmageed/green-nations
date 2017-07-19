import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Country } from "../models/country";
import { AppDataService } from "../services/app-data.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Country[];
  count: number;

  constructor(
    private dataService: AppDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
      let obs = this.dataService.getCountriesSlice(this.count)
        .subscribe(countries => this.countries = countries);

      this.route.params
        .subscribe(params => {
          this.count = params['count'];
          obs.unsubscribe();
          obs = this.dataService.getCountriesSlice(this.count)
              .subscribe(countries => this.countries = countries);
        });


  }

}
