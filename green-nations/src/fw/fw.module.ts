import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from "./content/content.component";
import { TitleBarComponent } from "./title-bar/title-bar.component";
import { TopBarComponent } from './top-bar/top-bar.component'
import { StatusBarComponent } from "./status-bar/status-bar.component";
import { MenuComponent } from "./menus/menu/menu.component";
import { MenuItemComponent } from "./menus/menu-item/menu-item.component";
import { PopupMenuComponent } from "./menus/popup-menu/popup-menu.component";
import { SigninComponent } from "./users/signin/signin.component";
import { RegisterUserComponent } from "./users/register-user/register-user.component";
import { DynamicFormComponent } from "./dynamic-forms/dynamic-form/dynamic-form.component";
import { DynamicFieldComponent } from "./dynamic-field/dynamic-field.component";

import { FrameworkConfigService } from "./services/framework-config.service";
import { ScreenService } from "./services/screen.service";
import { MenuService } from "./services/menu.service";

import { ScreenLargeDirective } from "./directives/screen-large.directive";
import { ScreenBelowLargeDirective } from "./directives/screen-below-large.directive";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLargeDirective,
    ScreenBelowLargeDirective,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    SigninComponent,
    RegisterUserComponent,
    DynamicFormComponent,
    DynamicFieldComponent
  ],
  exports: [
    FrameworkBodyComponent,
    DynamicFormComponent
  ],
  providers: [
    FrameworkConfigService,
    ScreenService,
    MenuService
  ]
})
export class FwModule { }
