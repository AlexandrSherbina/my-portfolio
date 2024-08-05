import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['login.component.scss'],
  template: `
    <div class="container-login">
        <div class="user-status flex-horizontal">
          User:
          <div class="flex-horizontal" *ngIf="isUser(); else offUser">
            <span class="user-online">Is online</span>
            <button (click)="logOut()">Log Out</button>
          </div>
          <ng-template #offUser>
            <span class="user-offline">Offline</span>
          </ng-template>
        </div>

        <form class="user-form" *ngIf="!isUser()" (ngSubmit)="onSubmit()">
          <div class="user-field">
            <label for="username">Username:</label>
            <input [(ngModel)]="username" name="username" id="username" placeholder="Username" required>
          </div>
          <div class="user-field">
            <label for="password">Password:</label>
            <input [(ngModel)]="password" name="password" id="password" type="password" placeholder="Password" required>
          </div>
          <div *ngIf="errorMessage" class="error-message">{{ errorMessage }}</div>
          <button class="btn-primary-pf" type="submit">Log In</button>
        </form>
    </div>
  `
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/app-resume']);
      },
      error => {
        console.error('Login failed', error);
        this.errorMessage = 'Login failed. Please check your credentials and try again.';
      }
    );
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/app-home']);
  }

  isUser() {
    return this.authService.isLoggedIn();
  }
}