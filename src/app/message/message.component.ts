import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [WebsocketService],
})
export class MessageComponent implements OnInit {
  public users: number = 0;
  public message: any = '';
  public sent_message: any = '';
  public messages: any[] = [];
  public received: any[] = [];
  public receive: any = '';
  public msg: any = [];

  constructor(private WebsocketService: WebsocketService) {}
  ngOnInit(): void {
    this.WebsocketService.receiveChat().subscribe((message: any) => {
      this.received.push(message);
      this.msg.push({ id: 'receive', data: message });
    });
    this.WebsocketService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }

  addChat() {
    this.messages.push(this.message);
    this.msg.push({ id: 'message', data: this.message });
    this.WebsocketService.sendChat(this.message);
    this.message = '';
  }
}
