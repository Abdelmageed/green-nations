import { Routes } from '@angular/router';
import { SettingsComponent } from "./settings/settings.component";
import { CountryListComponent } from "./country-list/country-list.component";
import { CountryDetailComponent } from "./country-detail/country-detail.component";
import { CountryMaintComponent } from "./country-maint/country-maint.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthenticatedUserComponent } from "./authenticated-user/authenticated-user.component";
import { SigninComponent } from "../fw/users/signin/signin.component";
import { RegisterUserComponent } from "../fw/users/register-user/register-user.component";
import { AuthGaurd } from "./services/auth-gaurd.service";



export const appRoutes: Routes = [
    {path: 'sign-in', component: SigninComponent},
    {path: 'register', component: RegisterUserComponent},
    {path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGaurd],
     children: [
        {path: '', canActivateChild: [AuthGaurd], children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'country-list/:count', component: CountryListComponent},
            {path: 'country-detail/:country', component: CountryDetailComponent},
            {path: 'country-maint', component: CountryMaintComponent},
            {path: 'settings', component: SettingsComponent},

     ]},
    ]},
    {path: '', component: SigninComponent},
    {path: '**', component: SigninComponent}    
]