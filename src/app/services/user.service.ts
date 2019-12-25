import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireStore: AngularFirestore) { }

  getUsers(): Observable<any> {
    return this.fireStore.collection('users').valueChanges({idField: 'documentId'});
  }

  setUserColor(userId: string): Observable<any> {
    return from(this.fireStore.collection('users').doc(userId).set({color: 'green'}));
  }
}
