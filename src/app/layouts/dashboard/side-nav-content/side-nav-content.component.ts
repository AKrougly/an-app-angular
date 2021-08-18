import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.scss']
})
export class SideNavContentComponent implements OnInit {

  navItems = [
    { label: 'Apps', route: '/dashboard/apps'},
    { label: 'Portfolio', route: '/dashboard/portfolio'},
    { label: 'About', route: '/dashboard/about'}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavigationSelection(navItem: any) {
    this.router.navigate([navItem.route]);
  }

}
