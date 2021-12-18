import { SchoolDetailComponent } from './components/schools/school-detail/school-detail.component';
import { SchoolListComponent } from './components/schools/school-list/school-list.component';
import { SchoolAddComponent } from './components/schools/school-add/school-add.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { ChangePasswordComponent } from './components/account/change-password/change-password.component';
import { MyAccountComponent } from './components/account/my-account/my-account.component';
import { LoginComponent } from './components/account/login/login.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    {
        path: 'account/login',
        component: LoginComponent,
    },
    {
        path: 'account/slug',
        component: MyAccountComponent,
    },
    {
        path: 'account/change-password',
        component: ChangePasswordComponent,
    },
    {
        path: 'account/create-account',
        component: CreateAccountComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'home',
        component: LandingPageComponent,
    },
    {
        path: 'add-school',
        component: SchoolAddComponent,
    },
    {
        path: 'schools',
        component: SchoolListComponent,
    },
    {
        path: 'school/:id',
        component: SchoolDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
