import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  template: `<table bgcolor="blue">
              <tr>
                <td><p>Nazwa komponentu: <b>Child!</b></p> <br>
                  Wiadomość od rodzica: {{message}}
                  <button (click)="sendMessage()">wyślij</button>
                </td>
              </tr>
            </table>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private data: DataService) { }

  message: string;

  ngOnInit() {
    this.data.currentMessage.subscribe(msg => this.message = msg);
  }

  sendMessage() {
    this.data.changeMessage('dziecko jest głodne');
  }
}
