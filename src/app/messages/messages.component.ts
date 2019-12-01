import { Component, OnInit } from '@angular/core';
// comp should display all messages, including HeroService when it fetches heroes
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messageService must be public, later to bind in the template
  // Angular only binds public component properties
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
