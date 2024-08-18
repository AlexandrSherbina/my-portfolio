import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [MatMenu, MatMenuModule, MatToolbar, MatIconModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss'
})
export class DropdownMenuComponent {
  @Output() openLoginPopup: EventEmitter<void> = new EventEmitter<void>();
  @Output() logOutLogin: EventEmitter<void> = new EventEmitter<void>();
  constructor(private router: Router, private loginComponent: LoginComponent) { }

  openAdminPanel() {
    this.router.navigate(['/admin']);
  }

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