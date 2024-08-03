import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeService } from '../resume.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: 'login.component.scss',
  template: `
<div class="user-is-login" >User: 
       <div class="flex-horizon" *ngIf="isUser(); else offUser">
         <span class="user-login-on" >Is online</span>
         <button (click)="logOutForLogin()">LogOut </button> 
       </div>
        <ng-template  #offUser>
           <span class="user-login-off">Offline.</span>
        </ng-template>
  </div>
    <form *ngIf="!isUser()" (ngSubmit)="onSubmit()">     
        <div class="user-field">
            <label for="username">Username: </label>
            <input [(ngModel)]="username" name="username" placeholder="Username" required>
          </div>
          <div class="user-field">
            <label for="password">Password:</label>
            <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required>
          </div>
          <button type="submit">LogIn</button>
    </form>
  `
})
export class LoginComponent {
  username: string = '';
  password: string = '';


  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/app-resume']);
      },
      error => {
        console.error('Login failed', error);
        // Здесь можно добавить обработку ошибки, например, показать сообщение пользователю
      }
    );
  }

  logOutForLogin() {
    this.authService.logOut();
    this.router.navigate(['/app-home']);
  }

  isUser() {
    return this.authService.isLoggedIn() ? true : false;
  }
}