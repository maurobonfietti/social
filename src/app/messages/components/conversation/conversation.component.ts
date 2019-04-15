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
    selector: 'conversation',
    templateUrl: './conversation.component.html',
    providers: [FollowService, MessageService]
})
export class ConversationComponent implements OnInit {
    public title: string;
    public identity;
    public token;
    public url: string;
    public status: string;
    public messages: Message[];
    public messagesEmmit: Message[];
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
        this.title = 'Mensajes y conversaciones';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
    }

    ngOnInit() {
        console.log('[OK] Component: conversation.');
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
            console.log(this.page);

//            this.getMessages(this.token, this.page);
//            this.getEmmitMessages(this.token, this.page);
            
//            this._route.params.subscribe(
//                params => {
//                    let id = params['id'];
//                    this.getUser(id);
//                    this.getCounter(id);
//                }
//            );
            let userId = params['userId'];
            
            this.getConversation(this.token, userId, this.page);
            
            console.log(this.page);
        });
    }

    getMessages(token, page) {
        this._messageService.getMyMessages(token, page).subscribe(
            response => {
                if (!response.messages) {

                } else {
                    this.messages = response.messages;
                    this.total = response.total;
                    this.pages = response.pages;
                    console.log(this.messages);
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    getEmmitMessages(token, page) {
        this._messageService.getEmmitMessages(token, page).subscribe(
            response => {
                if (!response.messages) {

                } else {
                    this.messagesEmmit = response.messages;
                    this.total = response.total;
                    this.pages = response.pages;
                    console.log(this.messagesEmmit);
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    getConversation(token, userId, page) {
        this._messageService.getConversation(token, userId, page).subscribe(
            response => {
                if (!response.messages) {

                } else {
                    this.messages = response.messages;
                    this.total = response.total;
                    this.pages = response.pages;
                    console.log(this.messages);
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }
}
