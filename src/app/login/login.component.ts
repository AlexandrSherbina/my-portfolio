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
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }
  public isPopupOpen = false;

  public togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  public onBackgroundClick(event: MouseEvent) {
    if (this.isPopupOpen) {
      this.togglePopup();
    }
  }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/admin']);
        this.togglePopup();
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