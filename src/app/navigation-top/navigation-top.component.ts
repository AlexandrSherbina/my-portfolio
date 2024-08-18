import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-navigation-top',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LoginComponent, DropdownMenuComponent],
  templateUrl: './navigation-top.component.html',
  styleUrl: './navigation-top.component.scss'
})
export class NavigationTopComponent {
  itemNavigation = [
    { id: 1, nameLink: 'Home', routerLink: 'app-home' },
    { id: 2, nameLink: 'About', routerLink: 'app-about' },
    { id: 3, nameLink: 'Resume', routerLink: 'app-resume' },
    { id: 4, nameLink: 'All portfolio', routerLink: 'app-all-portfolio' },
    { id: 5, nameLink: 'Contacts', routerLink: 'app-contacts' },
  ];

  @ViewChild('loginComponent') loginComponent!: LoginComponent;

  openLoginPopup() {
    this.loginComponent.togglePopup();
  }

  logOutLogin() {
    this.loginComponent.logOut();
  }
}
