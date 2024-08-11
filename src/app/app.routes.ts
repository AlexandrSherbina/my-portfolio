import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'app-home', pathMatch: 'full' },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
    { path: '**', component: PageNotFoundComponent }
];
