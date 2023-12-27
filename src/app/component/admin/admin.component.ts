import { Component, OnInit } from '@angular/core';

interface MenuItem {
  label: string;
  routerLink: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  showSidebar: boolean = false; // Tracks sidebar visibility
  // items: MenuItem[] = [ // Menu items for sidebar
  //   { label: 'Manage Parts', link: '/parts' },
  //   { label: 'Manage Users', link: '/users' },
  // ];
  items!: MenuItem[];
  
  sidebarVisible = false;

  // Your other properties and methods...
  ngOnInit(): void {
    this.items =[
      { label: 'Dashboard', routerLink: 'dashboard' },
      { label: 'Users', routerLink: '/users' },
      { label: 'Parts', routerLink: '/parts' },
  
      // Add more menu items as needed
    ];
  }
 
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
