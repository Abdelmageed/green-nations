import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

import { Country } from "../models/country";
import { AppDataService } from "../services/app-data.service";
import { FieldDefinition } from "../../fw/dynamic-forms/field-definition";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  
  operation: string;
  country: Country;
  countryDefinition: FieldDefinition[] = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true
    },
    {
      key: 'name',
      type: 'string',
      isId: false,
      label: 'Name',
      required: true,
    },
    {
      key: 'epiIndex',
      type: 'number',
      isId: false,
      label: 'EPI Index',
      required: true
    }
  ];
  errorMessage: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: AppDataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];

    switch (this.operation) {
      default:
        this.dataService.getCountry(this.route.snapshot.params['id'])
          .subscribe(data => this.country = data);

    }
  }

  updateCountry(country: Country) {
    this.dataService.updateCountry(country)
      .subscribe(
        // c => this.router.navigate(['/authenticated/country-maint']),
        c => this.location.back(),
        error => this.errorMessage = "Could not update country."
      )
  }

  createCountry(country: Country) {
    this.dataService.createCountry(country)
      .subscribe(
        c => this.location.back(),
        error => this.errorMessage = "Could not create country."
      )
  }

}
