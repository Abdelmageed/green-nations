import { Component, OnInit } from '@angular/core';
import { FrameworkConfigService } from '../services/framework-config.service';
import { IconFiles } from '../services/framework-config.service';

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  socialIcons: Array<IconFiles>;
  showUserControls: boolean;
  showLanguageSelector: boolean;

  constructor(private frameworkConfigService : FrameworkConfigService) { }

  ngOnInit() {
    this.socialIcons = this.frameworkConfigService.socialIcons;
    this.showLanguageSelector = this.frameworkConfigService.showLanguageSelector;
    this.showUserControls = this.frameworkConfigService.showUserControls;
  }

}
