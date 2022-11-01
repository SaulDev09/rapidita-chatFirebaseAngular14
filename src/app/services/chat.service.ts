import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

import { MessageModel } from '../model/message.model';
import { v4 as uuidv4 } from 'uuid';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection!: AngularFirestoreCollection<MessageModel>;
  public chats: MessageModel[] = [];
  public user: any = {};

  constructor(
    private readonly afs: AngularFirestore
  ) {
    if (sessionStorage.getItem('user')) {
      this.user = JSON.parse(sessionStorage.getItem('user') || '');
    }
  }

  login(name: string) {
    this.user.name = name;
    this.user.uid = uuidv4();
    sessionStorage.setItem('user', JSON.stringify(this.user));
  }

  logout() {
    sessionStorage.removeItem('user');
    this.user = {};
  }

  getMessages() {
    this.itemsCollection = this.afs.collection<MessageModel>('chats', ref => ref.orderBy('date', 'desc').limit(5));
    return this.itemsCollection.valueChanges().pipe(map((messages: MessageModel[]) => {
      this.chats = [];
      messages.forEach(item => {
        this.chats.unshift(item);
      });
      return this.chats;
    }))
  }

  saveMessage(text: string) {
    let message: MessageModel = {
      name: this.user.name,
      message: text,
      date: new Date().getTime(),
      uid: this.user.uid
    }

    return this.itemsCollection.add(message);
  }
}
