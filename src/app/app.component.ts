import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
searchOptions: any[]= [
  { label: 'Register', routerLink: '/register' },
{ label: 'Submenu Item 2', routerLink: '/submenu2' },];
selectedSearchOption: any;
onMenuItemClick(_t8: any) {
throw new Error('Method not implemented.');
}
  title = 'frontend';

  items: any[] = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
    { label: 'Products', icon: 'pi pi-shopping-cart', routerLink: '/products' },
    { label: 'About', icon: 'pi pi-info', routerLink: '/about' },
    {
      label: 'More', icon: 'pi pi-ellipsis-v', items: [
        { label: 'Register', routerLink: '/register' },
        { label: 'Submenu Item 2', routerLink: '/submenu2' },
      ]
    }
  ];

  searchValue: string = '';

  onSearch() {
    // Implement your search functionality here
  }
}
