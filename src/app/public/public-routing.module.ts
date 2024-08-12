import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ResumeComponent } from '../resume/resume.component';
import { AuthGuard } from '../auth.guard';
import { AllPortfolioComponent } from '../all-portfolio/all-portfolio.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: 'app-about', component: AboutComponent },
  { path: 'app-home', component: HomeComponent },
  {
    path: 'app-resume', component: ResumeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'app-all-portfolio', component: AllPortfolioComponent },
  { path: 'app-contacts', component: ContactsComponent },
  { path: 'app-login', component: LoginComponent },

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
