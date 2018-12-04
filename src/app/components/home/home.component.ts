import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [UserService]
})
export class HomeComponent implements OnInit {
    public title: string;
    public identity;

    constructor(
        private _userService: UserService
    ) {
        this.title = 'Bienvenido!';
    }

    ngOnInit() {
        console.log('Componente home cargado.');
        console.log('app version 0.0.1');
        this.identity = this._userService.getIdentity();
//        console.log(this.identity);
    }

    onSubmit() {
    }
}
