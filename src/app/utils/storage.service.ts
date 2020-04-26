import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public localStorage: any;
  constructor() {
    if (!localStorage) {
      throw new Error('Current browser does not support Local Storage');
    }
    this.localStorage = localStorage;
   }

  set(key: string, value: any[]) {
    localStorage.setItem(key, JSON.stringify(value)); // 序列化
  }
  get(key: string) {
    return JSON.parse(localStorage.getItem(key)); // 反序列化
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }
}
