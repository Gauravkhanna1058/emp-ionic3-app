import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
 
@Injectable()
export class Data {
 
  constructor(public storage: Storage){
 
  }
 
  getData() {
    return this.storage.get('emp'); 
  }
 
  save(data){
    this.storage.set('emp', data);
  }
 
}