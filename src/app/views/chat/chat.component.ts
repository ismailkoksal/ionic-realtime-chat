import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {Message} from '../../models/message';
import {ActionSheetController} from '@ionic/angular';
import {Subscription} from 'rxjs';
import {ActionSheetService} from '../../services/action-sheet.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

    private messages: Message[];

    constructor(private chat: ChatService, private actionSheet: ActionSheetService) {
    }

    ngOnInit() {
        this.chat.getMessages().subscribe((messages: Message[]) => this.messages = messages);
    }

    onInputEnter(messageText: string) {
        const message: Message = {
            author: 'Ismail',
            content: messageText,
            timestamp: Date.now()
        };
        this.chat.sendMessage(message).subscribe();
    }

    onMessageClick(message: Message) {
        this.actionSheet.presentActionSheet(
            this.chat.deleteMessage(message.documentId).subscribe(),
            this.chat.updateMessage(message)
        );
    }
}
