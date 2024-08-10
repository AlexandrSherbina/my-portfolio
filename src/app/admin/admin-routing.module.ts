import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../auth.guard';
import { OverviewComponent } from '../overview/overview.component';
import { UsersComponent } from '../users/users.component';
import { SettingsComponent } from '../settings/settings.component';



const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'app-login', pathMatch: 'full' },
      { path: 'app-overview', component: OverviewComponent },
      { path: 'app-users', component: UsersComponent },
      { path: 'app-settings', component: SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
