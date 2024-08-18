import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavigationTopComponent } from './navigation-top/navigation-top.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationTopComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio-app';
}
