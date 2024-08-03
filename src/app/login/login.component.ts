import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeService } from '../resume.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()">      
      <input [(ngModel)]="username" name="username" placeholder="Username" required>
      <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required>
      <button type="submit">LogIn</button>
    </form>
    <button (click)="logOutForLogin()">LogOut</button>
  `
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  user: boolean = false;

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
}