import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { AllPortfolioComponent } from './all-portfolio/all-portfolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ResumeComponent } from './resume/resume.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/app-home', pathMatch: 'full' },
    { path: 'app-about', component: AboutComponent },
    { path: 'app-home', component: HomeComponent },
    { path: 'app-resume', component: ResumeComponent },
    { path: 'app-all-portfolio', component: AllPortfolioComponent },
    { path: 'app-contacts', component: ContactsComponent },
    // { path: 'app-authorization', component: AuthorizationComponent },
    { path: 'app-login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
];
