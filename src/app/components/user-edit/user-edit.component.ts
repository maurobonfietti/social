import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit.component.html',
    providers: [UserService]
})
export class UserEditComponent implements OnInit {
    public title: string;
    public user: User;
    public status: string;
    public identity;
    public token;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ) {
        this.title = 'Actualizar mis datos';
        this.user = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.identity = this.user;
    }

    ngOnInit() {
        console.log(this.user);
        console.log('Componente user-edit cargado.');
    }
}
