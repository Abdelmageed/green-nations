import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FwModule } from "../fw/fw.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { UserService } from "./services/user.service";
import { UserApi } from "../fw/users/user-api";
import { AuthGaurd } from "./services/auth-gaurd.service";
import { AppDataService } from "./services/app-data.service";
import { CountryPanelComponent } from './country-panel/country-panel.component';
import { ImagePanelComponent } from './image-panel/image-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    AuthenticatedUserComponent,
    CountryPanelComponent,
    ImagePanelComponent
  ],
  imports: [
    BrowserModule,
    FwModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppDataService,
    UserService,
    {provide: UserApi, useExisting: UserService},
    AuthGaurd,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
