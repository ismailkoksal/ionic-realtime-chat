import {EventEmitter, Injectable} from '@angular/core';
import {Message} from '../models/message';
import {ActionSheetController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ActionSheetService {

  constructor(private actionSheetController: ActionSheetController) { }

  async presentActionSheet(deleteHandler, updateHandler) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => deleteHandler
      }, {
        text: 'Update',
        icon: 'share',
        handler: () => updateHandler
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }
}
