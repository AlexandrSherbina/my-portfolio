import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { OverviewComponent } from '../overview/overview.component';
import { UsersComponent } from '../users/users.component';
import { SettingsComponent } from '../settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    OverviewComponent,
    UsersComponent,
    SettingsComponent
  ]
})
export class AdminModule { }
