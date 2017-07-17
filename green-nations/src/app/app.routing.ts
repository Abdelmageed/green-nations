import { Routes } from '@angular/router';
import { SettingsComponent } from "./settings/settings.component";
import { CountryListComponent } from "./country-list/country-list.component";
import { CountryDetailComponent } from "./country-detail/country-detail.component";
import { CountryMaintComponent } from "./country-maint/country-maint.component";
import { DashboardComponent } from "./dashboard/dashboard.component";



export const appRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'country-list/:count', component: CountryListComponent},
    {path: 'country-detail/:country', component: CountryDetailComponent},
    {path: 'country-maint', component: CountryMaintComponent},
    {path: 'settings', component: SettingsComponent},
    {path: '', component: DashboardComponent},
    {path: '**', component: DashboardComponent}    
]