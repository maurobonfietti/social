import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersComponent } from './components/users/users.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'mis-datos', component: UserEditComponent},
    {path: 'gente', component: UsersComponent},
    {path: 'gente/:page', component: UsersComponent},
    {path: 'timeline', component: TimelineComponent},
    {path: 'perfil/:id', component: ProfileComponent},
    {path: '**', component: HomeComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
