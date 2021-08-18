import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './_auth/guards/auth.guard';

import { AboutPageComponent } from './layouts/dashboard/pages/about-page/about-page.component';
import { PortfolioPageComponent } from './layouts/dashboard/pages/portfolio-page/portfolio-page.component';
import { AppsPageComponent } from './layouts/dashboard/pages/apps-page/apps-page.component';
import { ContentComponent } from './layouts/dashboard/content/content.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

/*
* Routing for the items feature are stored in the items module file
*/

const routes: Routes = [

    { path: 'dashboard', component: ContentComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/apps', component: AppsPageComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/portfolio', component: PortfolioPageComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/about', component: AboutPageComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '',  redirectTo: '/dashboard', pathMatch: 'full' }, // catch all route

];
export const routingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
