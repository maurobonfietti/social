import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ReceivedComponent } from './components/received/received.component';
import { SendedComponent } from './components/sended/sended.component';

const messagesRoutes: Routes = [
    {
        path: 'mensajes',
        component: MainComponent,
        children: [
            {path: '', redirectTo: 'recibidos', pathMatch: 'full'},
            {path: 'enviar', component: AddComponent},
            {path: 'recibidos', component: ReceivedComponent},
            {path: 'recibidos/:page', component: ReceivedComponent},
            {path: 'enviados', component: SendedComponent},
            {path: 'enviados/:page', component: SendedComponent},
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
