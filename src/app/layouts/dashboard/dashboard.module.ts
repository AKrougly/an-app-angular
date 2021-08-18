import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavContentComponent } from './side-nav-content/side-nav-content.component';
import { AppsPageComponent } from './pages/apps-page/apps-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    SideNavComponent,
    SideNavContentComponent,
    AppsPageComponent,
    PortfolioPageComponent,
    AboutPageComponent,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class UiModule { }
