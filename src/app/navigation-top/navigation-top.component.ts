import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navigation-top',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LoginComponent, MatIconModule],
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
  adminPanelLogIn = 'Log In';
  adminPanelLogOut = 'Log Out';

  @Output() openLoginPopup: EventEmitter<void> = new EventEmitter<void>();
  @Output() logOutLogin: EventEmitter<void> = new EventEmitter<void>();

  constructor(private loginComponent: LoginComponent) { }

  // Эта функция будет вызываться при клике на кнопку
  onAuthorizationClick(): void {
    this.openLoginPopup.emit();
  }

  unAuthorizationClick(): void {
    this.logOutLogin.emit();
  }

  isAdmin(): boolean {
    return this.loginComponent.isUser();
  }
}
