import {Component, OnInit, DoCheck} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Message} from '../../../models/message';
import {MessageService} from '../../../services/message.service';
import {Follow} from '../../../models/follow';
import {FollowService} from '../../../services/follow.service';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';
import {GLOBAL} from '../../../services/global';

@Component({
    selector: 'sended',
    templateUrl: './sended.component.html',
    providers: [FollowService, MessageService]
})
export class SendedComponent implements OnInit {
    public title: string;
    public identity;
    public token;
    public url: string;
    public status: string;
    public messages: Message[];
    public pages;
    public total;
    public page;
    public next_page;
    public prev_page;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _followService: FollowService,
        private _messageService: MessageService,
        private _userService: UserService,
    ) {
        this.title = 'Mensajes enviados';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
    }

    ngOnInit() {
        console.log('[OK] Component: sended.');
        this.actualPage();
    }

    actualPage() {
        this._route.params.subscribe(params => {
            let page = +params['page'];

            if (!params['page']) {
                page = 1;
            }

            if (!page) {
                page = 1;
            } else {
                this.next_page = page + 1;
                this.prev_page = page - 1;
                
                if (this.prev_page <= 0) {
                    this.prev_page = 1;
                }
            }

            this.page = page;

            this.getMessages(this.token, this.page);
        });
    }

    getMessages(token, page) {
        this._messageService.getEmmitMessages(token, page).subscribe(
            response => {
                if (!response.messages) {

                } else {
                    this.messages = response.messages;
                    this.total = response.total;
                    this.pages = response.pages;
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }
}
