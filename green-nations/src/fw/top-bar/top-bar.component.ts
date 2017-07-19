import { Component, OnInit } from '@angular/core';
import { FrameworkConfigService } from '../services/framework-config.service';
import { IconFiles } from '../services/framework-config.service';
import { UserService } from "../../app/services/user.service";

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  socialIcons: Array<IconFiles>;
  showUserControls: boolean;
  showLanguageSelector: boolean;

  constructor(
    private frameworkConfigService : FrameworkConfigService,
    private userService : UserService
  ) { }

  ngOnInit() {
    this.socialIcons = this.frameworkConfigService.socialIcons;
    this.showLanguageSelector = this.frameworkConfigService.showLanguageSelector;
    this.showUserControls = this.frameworkConfigService.showUserControls;
  }

  signOut() {
    this.userService.signOut();
  }

}
