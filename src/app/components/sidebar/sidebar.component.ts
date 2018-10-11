import {Component, OnInit} from '@angular/core';
//import {Router, ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../../services/user.service';
import {GLOBAL} from '../../services/global';
import {Publication} from '../../models/publication';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    providers: [UserService]
})
export class SidebarComponent implements OnInit {
    public url;
    public identity;
    public token;
    public stats;
    public status;
    public publication: Publication;

    constructor(
        private _userService: UserService
    ) {
        this.url = GLOBAL.url;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
//        this.stats = this._userService.getStats();
        this.stats = JSON.parse(localStorage.getItem('stats'));
        
        this.publication = new Publication("", "", "", "", this.identity._id);
    }

    ngOnInit() {
        console.log('Componente sidebar cargado.');
    }

    onSubmit() {
        console.log(this.publication);
    }
}
