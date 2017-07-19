import { Component, OnInit } from '@angular/core';
import { AppDataService } from "../services/app-data.service";
import { Country } from "../models/country";
import { Router } from "@angular/router";

@Component({
  selector: 'app-country-maint',
  templateUrl: './country-maint.component.html',
  styleUrls: ['./country-maint.component.css']
})
export class CountryMaintComponent implements OnInit {

  countries: Country[];
  deleteId: number;
  deleteError: string;
  deleting: boolean = false;
  constructor(
    private appDataService: AppDataService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    this.appDataService.getCountries()
      .subscribe(data => this.countries = data);
  }

  showCountryDetails(id: number) {
    this.router.navigate(['/authenticated/country-detail', id, 'details']);
  }

  editCountry(id: number) {
    this.router.navigate(['/authenticated/country-detail', id, 'edit']);
  }

  createCountry() {
    this.router.navigate(['/authenticated/country-detail', 0, 'create']);
  }

  deleteCountry(id: number) {
    this.appDataService.deleteCountry(id)
      .subscribe(
        d => {
          this.countries = d;
          this.deleting = false;
          this.deleteId = null;
      }, error => {
          this.deleteError = error;
      });
  }

  deleteCountryPrompt(id: number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  cancelDelete() {
    this.deleting = false,
    this.deleteId = null;
  }
}
