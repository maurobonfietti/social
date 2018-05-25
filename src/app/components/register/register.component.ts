import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    public title:string;

    constructor() {
        this.title = 'Registrate';
    }

    ngOnInit() {
        console.log('Componente register cargado.');
    }
}
