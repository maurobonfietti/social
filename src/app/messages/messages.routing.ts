import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ReceivedComponent } from './components/received/received.component';
import { SendedComponent } from './components/sended/sended.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { UsersComponent } from './components/users/users.component';

import {UserGuard} from '../services/user.guard';

const messagesRoutes: Routes = [
    {
        path: 'mensajes',
        component: MainComponent,
        children: [
            {path: '', redirectTo: 'enviar', pathMatch: 'full'},
            {path: 'enviar', component: AddComponent, canActivate:[UserGuard]},
            {path: 'recibidos', component: ReceivedComponent, canActivate:[UserGuard]},
            {path: 'recibidos/:page', component: ReceivedComponent, canActivate:[UserGuard]},
            {path: 'enviados', component: SendedComponent, canActivate:[UserGuard]},
            {path: 'enviados/:page', component: SendedComponent, canActivate:[UserGuard]},
            {path: 'conversation/:userId', component: ConversationComponent, canActivate:[UserGuard]},
            {path: 'conversation/:userId/:page', component: ConversationComponent, canActivate:[UserGuard]},
            {path: 'gente', component: UsersComponent, canActivate:[UserGuard]},
            {path: 'gente/:page', component: UsersComponent, canActivate:[UserGuard]},
        ]
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(messagesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class MessagesRoutingModule { }
