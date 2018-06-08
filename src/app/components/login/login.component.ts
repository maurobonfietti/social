import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [UserService]
})
export class LoginComponent implements OnInit {
    public title:string;
    public user: User;
    public status: string;
    public identity;
    public token;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ) {
        this.title = 'Identificate';
        this.user = new User("", "", "", "", "", "", "ROLE_USER", "");
    }

    ngOnInit() {
        console.log('Componente login cargado.');
    }

    onSubmit() {
        this._userService.signup(this.user).subscribe(
            response => {
                this.identity = response.user;
                if (!this.identity || !this.identity._id) {
                    this.status = 'error';
                }
                this.status = 'success';
                this.getToken();
            },
            error => {
                console.log(<any>error);
                var errorMessage = <any>error;
                if (errorMessage != null) {
                    this.status = 'error';
                }
            }
        );
    }

    getToken() {
        this._userService.signup(this.user, 'true').subscribe(
            response => {
                this.token = response.token;
                if (this.token.length <= 0) {
                    this.status = 'error';
                }
                this.status = 'success';
            },
            error => {
                console.log(<any>error);
                var errorMessage = <any>error;
                if (errorMessage != null) {
                    this.status = 'error';
                }
            }
        );
    }
}
