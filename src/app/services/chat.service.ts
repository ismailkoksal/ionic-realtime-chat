import {Injectable} from '@angular/core';
import {Message} from '../models/message';
import {Observable} from 'rxjs';
import {AngularFirestore} from 'angularfire2/firestore';
import {from} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    constructor(private fireStore: AngularFirestore) {
    }

    getMessages(): Observable<Message[]> {
        return this.fireStore.collection<Message>('messages', messages => messages.orderBy('timestamp'))
            .valueChanges({idField: 'documentId'});
    }

    sendMessage(message: Message): Observable<any> {
        return from(this.fireStore.collection<Message>('messages').add(message)).pipe(
            tap(
                value => console.log('Added new message with id ' + value.id),
                reason => console.error('Failed to add message', reason)
            )
        );
    }

    updateMessage(message) {
    }

    deleteMessage(messageId): Observable<any> {
        return from(this.fireStore.collection<Message>('messages').doc(messageId).delete()).pipe(
            tap(
                () => console.log('Deleted message with id ' + messageId),
                error => console.error('Failed to delete message', error)
            )
        );
    }
}
