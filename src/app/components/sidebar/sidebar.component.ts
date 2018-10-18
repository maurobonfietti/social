import {Component, OnInit} from '@angular/core';
//import {Router, ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../../services/user.service';
import {PublicationService} from '../../services/publication.service';
import {GLOBAL} from '../../services/global';
import {Publication} from '../../models/publication';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    providers: [UserService, PublicationService]
})
export class SidebarComponent implements OnInit {
    public url;
    public identity;
    public token;
    public stats;
    public status;
    public publication: Publication;

    constructor(
        private _userService: UserService,
        private _publicationService: PublicationService
    ) {
        this.url = GLOBAL.url;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.stats = this._userService.getStats();
//        this.stats = JSON.parse(localStorage.getItem('stats'));
//        console.log(this.stats);

        this.publication = new Publication("", "", "", "", this.identity._id);
    }

    ngOnInit() {
        console.log('Componente sidebar cargado.');
    }

    onSubmit(form) {
        console.log(this.publication);
        this._publicationService.addPublication(this.token, this.publication).subscribe(
            response => {
                if (response.publication) {
//                    this.publication = response.publication;
                    this.status = 'success';
                    form.reset();
                } else {
                    this.status = 'error';
                }
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);

                if (errorMessage != null) {
                    this.status = 'error';
                }
            }
        );
    }
}
