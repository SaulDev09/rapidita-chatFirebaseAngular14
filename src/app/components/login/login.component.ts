import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public name: string = '';

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void { }

  login() {
    this.chatService.login(this.name);
  }
}