import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ResumeComponent } from '../resume/resume.component';
import { AllPortfolioComponent } from '../all-portfolio/all-portfolio.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    AboutComponent,
    HomeComponent,
    ResumeComponent,
    AllPortfolioComponent,
    ContactsComponent,
    LoginComponent,
    PageNotFoundComponent
  ]
})
export class PublicModule { }
