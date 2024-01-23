import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface option {
  label: string;
  routerLink: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  constructor(public router: Router) {}

  selectedSearchOption!: option;

  onMenuItemClick(item: any) {
    this.router.navigateByUrl(item.routerLink);
  }

  items: any[] = [
    // { label: 'Home', icon: 'pi pi-home', routerLink: '' },
    { label: 'Parts', icon: 'pi pi-shopping-cart', routerLink: 'parts' },
    { label: 'About', icon: 'pi pi-info', routerLink: '/about' },
  ];

  searchValue: string = '';

  onSearch() {
    // Implement your search functionality here
  }

  userOptions: option[] = [
    { label: 'Home', routerLink: '/' },
    { label: 'Register', routerLink: 'register' },
    { label: 'Login', routerLink: 'login' },
     // Adjust logout link based on your logic
  ];

  selectedUserOption!: option;

  navigate(alpha: option) {
    this.router.navigateByUrl(alpha.routerLink);
  }
}
