import { Component, OnInit} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `<div align="center"><table bgcolor="green">
              <tr>
                <td><p>Nazwa komponentu <b>Parrent</b></p><br>
                  wiadomość do dziecka: {{message}}
                  <button type="button" (click)="sendMessage()">wyślij</button>
                  <app-child></app-child>
                </td>
              </tr>
            </table></div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'SendDataBetweenComponents';
  message: string;

  ngOnInit() {
    this.data.currentMessage.subscribe(msg => this.message = msg);
  }

  constructor(private data: DataService) {

  }

  sendMessage() {
    this.data.changeMessage('rodzic robi mleko');
  }
}
