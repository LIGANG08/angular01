import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  add(message: string) {
    this.messages.push(message);
  }  // add() 方法往缓存中添加一条消息

  clear() {
    this.messages = [];
  }  // clear() 方法用于清空缓存。

  constructor() { }
}
