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
        redirectTo: 'account/login'
    },
    {
        path: 'account/login',
        component: LoginComponent
    },
    {
        path: 'account/slug',
        component: MyAccountComponent
    },
    {
        path: 'account/change-password',
        component: ChangePasswordComponent
    },
    {
        path: 'account/create-account',
        component: CreateAccountComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }