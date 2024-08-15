import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavigationTopComponent } from './navigation-top/navigation-top.component';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, NavigationTopComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio-app';
  @ViewChild('loginComponent') loginComponent!: LoginComponent;

  openLoginPopup() {
    this.loginComponent.togglePopup();
  }

  logOutLogin() {
    this.loginComponent.logOut();
  }
}
