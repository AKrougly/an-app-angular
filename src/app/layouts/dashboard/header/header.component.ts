import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthService } from './../../../_auth/services/auth.service';
import { SideNavService } from "../services/side-nav.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  navToggle: Boolean = false;

  constructor(
    private authService: AuthService,
    private sideNavService: SideNavService,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  toggleNav() {
    this.navToggle  = !this.navToggle;
  }

  showSideNav() {
    this.sideNavService.setShowNav(true);
  }
}
